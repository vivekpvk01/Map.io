"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { searchRoadmaps, findRoadmapByQuery, type Roadmap } from "@/utils/roadmaps"

interface SearchBarProps {
  placeholder?: string
  showButton?: boolean
  className?: string
  onSearch?: (query: string) => void
}

export function SearchBar({
  placeholder = "Search any roadmap (e.g., Frontend, DevOps)",
  showButton = false,
  className = "",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Roadmap[]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.trim()) {
      const results = searchRoadmaps(query)
      setSearchResults(results.slice(0, 5)) // Show max 5 results
      setShowResults(true)
      setSelectedIndex(-1)
    } else {
      setSearchResults([])
      setShowResults(false)
      setSelectedIndex(-1)
    }
  }, [query])

  // Handle clicking outside to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) return

    const match = findRoadmapByQuery(query)

    if (match) {
      navigateToRoadmap(match.slug)
    } else {
      // If no exact match, redirect to generate page with the query
      router.push(`/generate?goal=${encodeURIComponent(query)}`)
      closeSearch()
      onSearch?.(query)
    }
  }

  const navigateToRoadmap = (slug: string) => {
    router.push(`/roadmaps/${slug}`)
    closeSearch()
  }

  const closeSearch = () => {
    setShowResults(false)
    setQuery("")
    setSelectedIndex(-1)
  }

  const handleResultClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault()
    e.stopPropagation()
    navigateToRoadmap(slug)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showResults) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
          navigateToRoadmap(searchResults[selectedIndex].slug)
        } else {
          handleSearch(e as any)
        }
        break
      case "Escape":
        setShowResults(false)
        setSelectedIndex(-1)
        break
    }
  }

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <form onSubmit={handleSearch} className="relative flex">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-10 pr-4 bg-[#161b22] border-[#30363d] text-gray-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            onFocus={() => query && setShowResults(true)}
          />
        </div>

        {showButton && (
          <Button type="submit" className="ml-2">
            Search
          </Button>
        )}
      </form>

      {/* Search Results Dropdown */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#161b22] border border-[#30363d] rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {searchResults.map((roadmap, index) => (
            <div
              key={roadmap.slug}
              className={`px-4 py-3 cursor-pointer border-b border-[#30363d] last:border-b-0 transition-colors ${
                index === selectedIndex ? "bg-[#21262d] border-blue-500" : "hover:bg-[#21262d]"
              }`}
              onClick={(e) => handleResultClick(e, roadmap.slug)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="font-medium text-gray-200">{roadmap.title}</div>
              <div className="text-sm text-gray-400 truncate">{roadmap.description}</div>
            </div>
          ))}

          {query && !findRoadmapByQuery(query) && (
            <div
              className="px-4 py-3 border-t border-[#30363d] bg-[#21262d]/50 cursor-pointer hover:bg-[#21262d]"
              onClick={() => {
                router.push(`/generate?goal=${encodeURIComponent(query)}`)
                closeSearch()
              }}
            >
              <div className="text-sm text-gray-400">
                <span className="text-blue-400">Generate AI Roadmap:</span> No exact match found. Click to create a
                custom "{query}" roadmap with AI.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
