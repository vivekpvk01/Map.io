"use client"

import { useTheme } from "@/app/providers/theme-provider"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded transition hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
