"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useMounted } from "@/hooks/use-mounted"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const mounted = useMounted()

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

export { useTheme } from "next-themes"
