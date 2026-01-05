import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">AI Roadmaps</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered learning roadmaps for developers and professionals.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Roadmaps</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/roadmaps/frontend" className="hover:text-foreground">
                  Frontend
                </Link>
              </li>
              <li>
                <Link href="/roadmaps/backend" className="hover:text-foreground">
                  Backend
                </Link>
              </li>
              <li>
                <Link href="/roadmaps/devops" className="hover:text-foreground">
                  DevOps
                </Link>
              </li>
              <li>
                <Link href="/roadmaps/ai-engineer" className="hover:text-foreground">
                  AI Engineer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/generate" className="hover:text-foreground">
                  Generate Roadmap
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-foreground">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-foreground">
                  Teams
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 AI Roadmaps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
