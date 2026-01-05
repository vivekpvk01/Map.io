"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="space-y-4">
          <div className="mx-auto w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">404</span>
          </div>
          <CardTitle className="text-2xl font-bold">Page Not Found</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the
            wrong URL.
          </CardDescription>
          <div className="flex justify-center pt-2">
            <ThemeToggle />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="flex items-center gap-2">
              <Link href="/">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need help?{" "}
              <Link href="/roadmaps" className="text-blue-600 hover:underline">
                Browse our roadmaps
              </Link>{" "}
              or{" "}
              <Link href="/generate" className="text-blue-600 hover:underline">
                generate a new one
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
