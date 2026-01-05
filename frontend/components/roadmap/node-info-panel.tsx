import type React from "react"
import type { Node } from "reactflow"
import { ExternalLink } from "lucide-react"

interface NodeInfoPanelProps {
  selectedNode: Node<any> | null
}

const NodeInfoPanel: React.FC<NodeInfoPanelProps> = ({ selectedNode }) => {
  if (!selectedNode) {
    return <div className="p-4">Select a node to view details.</div>
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">{selectedNode.data.label}</h2>
      <p className="text-gray-600 dark:text-gray-400">{selectedNode.data.description}</p>

      {selectedNode.data.resources && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Free Resources</h3>
          <div className="space-y-2">
            {selectedNode.data.resources.map((resource, index) => (
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
