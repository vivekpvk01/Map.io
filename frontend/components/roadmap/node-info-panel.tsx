import type React from "react"
import type { Node } from "reactflow"
import { ExternalLink } from "lucide-react"

interface NodeInfoPanelProps {
  node: {
    id: string
    data: {
      label: string
      description: string
      resources?: {
        title: string
        url: string
        type: string
      }[]
    }
  }
  onClose: () => void
  isCompleted: boolean
  onToggleComplete: () => void
}

const NodeInfoPanel: React.FC<NodeInfoPanelProps> = ({ node }) => {
  if (!node) {
    return <div className="p-4">Select a node to view details.</div>
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">{node.data.label}</h2>
      <p className="text-gray-600 dark:text-gray-400">{node.data.description}</p>

      {node.data.resources && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Free Resources</h3>
          <div className="space-y-2">
            {node.data.resources.map((resource: any, index: any) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                  {resource.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default NodeInfoPanel
