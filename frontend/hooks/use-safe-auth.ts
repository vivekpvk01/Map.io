"use client"

import { useEffect, useState } from "react"

interface SafeAuthReturn {
  user: any
  signOut: () => void
  isClient: boolean
  loading: boolean
}

export function useSafeAuth(): SafeAuthReturn {
  const [isClient, setIsClient] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setIsClient(true)
    setLoading(false)
  }, [])

  const signOut = () => {
    setUser(null)
  }

  return {
    user,
    signOut,
    isClient,
    loading: !isClient,
  }
}
