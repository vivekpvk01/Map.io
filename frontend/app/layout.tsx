import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/app/providers/auth-provider"
import { ThemeProvider } from "@/app/providers/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/layout/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Roadmaps - Personalized Learning Paths",
  description: "Discover and create personalized learning roadmaps with AI assistance",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="min-h-screen bg-background">
              <Navbar />
              <main>{children}</main>
              <Toaster />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
