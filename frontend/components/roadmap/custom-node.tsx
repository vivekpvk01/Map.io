import { Handle, Position } from "reactflow"

interface CustomNodeProps {
  data: {
    label: string
    description?: string
    difficulty?: string
  }
  selected?: boolean
}

export function CustomNode({ data, selected }: CustomNodeProps) {
  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case "beginner":
        return "border-green-500 bg-green-50"
      case "intermediate":
        return "border-yellow-500 bg-yellow-50"
      case "advanced":
        return "border-red-500 bg-red-50"
      default:
        return "border-gray-300 bg-white"
    }
  }

  return (
    <div
      className={`
      px-4 py-2 shadow-md rounded-md border-2 min-w-[120px] text-center
      ${getDifficultyColor(data.difficulty)}
      ${selected ? "ring-2 ring-blue-500" : ""}
      hover:shadow-lg transition-all duration-200 cursor-pointer
    `}
    >
      <Handle type="target" position={Position.Top} className="w-2 h-2" />
      <div className="font-semibold text-sm text-gray-800">{data.label}</div>
      <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
    </div>
  )
}
