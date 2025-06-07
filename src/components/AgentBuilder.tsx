'use client'

import { useState } from 'react'
import { useDrop } from 'react-dnd'
import { Trash2, Play } from 'lucide-react'

interface Component {
  type: string
  title: string
  description: string
  id: string
}

interface AgentBuilderProps {
  onAgentCreated: (components: Component[]) => void
}

const AgentBuilder = ({ onAgentCreated }: AgentBuilderProps) => {
  const [components, setComponents] = useState<Component[]>([])
  const [agentName, setAgentName] = useState('')

  const [{ isOver }, drop] = useDrop({
    accept: 'component',
    drop: (item: any) => {
      const newComponent: Component = {
        ...item,
        id: Date.now().toString()
      }
      setComponents(prev => [...prev, newComponent])
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  const removeComponent = (id: string) => {
    setComponents(prev => prev.filter(comp => comp.id !== id))
  }

  const createAgent = () => {
    if (components.length > 0 && agentName.trim()) {
      onAgentCreated(components)
    }
  }

  const canCreateAgent = components.length > 0 && agentName.trim().length > 0

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-5 h-full flex flex-col">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-marine-blue-900 mb-2 flex items-center">
          <div className="p-2 bg-gradient-to-r from-sky-blue-600 to-marine-blue-600 rounded-lg mr-3">
            <Play className="text-white" size={18} />
          </div>
          Agent Builder
        </h2>
        <p className="text-sm text-gray-600">Configure and deploy your AI agent</p>
      </div>
      
      {/* Agent Name Input */}
      <div className="mb-4">
        <label htmlFor="agentName" className="block text-sm font-medium text-gray-700 mb-2">
          Agent Name
        </label>
        <input
          id="agentName"
          type="text"
          value={agentName}
          onChange={(e) => setAgentName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue-500 focus:border-transparent bg-white/70 backdrop-blur-sm text-sm"
          placeholder="Enter your agent's name..."
        />
      </div>

      {/* Drop Zone */}
      <div
        ref={drop as any}
        className={`flex-1 min-h-[280px] border-2 border-dashed rounded-lg p-4 transition-all duration-300 ${
          isOver 
            ? 'border-sky-blue-400 bg-gradient-to-br from-sky-blue-50 to-marine-blue-50 scale-[1.01]' 
            : 'border-gray-300 bg-gradient-to-br from-gray-50 to-white'
        }`}
      >
        {components.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              <div className="mb-4">
                <Play className="mx-auto text-gray-400" size={48} />
              </div>
              <p className="text-lg mb-2 font-medium">Drop components here to build your agent</p>
              <p className="text-sm">Drag components from the library to get started</p>
            </div>
          </div>
        ) : (
          <div className="space-y-2 h-full overflow-y-auto">
            {components.map((component, index) => (
              <div
                key={component.id}
                className="flex items-center justify-between p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-white/60 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="bg-gradient-to-r from-sky-blue-600 to-marine-blue-600 text-white rounded-full text-sm font-bold min-w-[28px] h-7 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-marine-blue-900 text-sm">{component.title}</h4>
                    <p className="text-xs text-gray-600 truncate">{component.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeComponent(component.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors duration-200 flex-shrink-0"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create Agent Button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={createAgent}
          disabled={!canCreateAgent}
          className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg ${
            canCreateAgent
              ? 'bg-gradient-to-r from-sky-blue-600 to-marine-blue-600 hover:from-sky-blue-700 hover:to-marine-blue-700 text-white transform hover:scale-105 hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Play size={18} className="mr-2" />
          Create Agent
        </button>
      </div>

      {/* Info Box */}
      <div className="mt-4 p-3 bg-gradient-to-r from-marine-blue-50 to-sky-blue-50 rounded-lg border border-marine-blue-200/30">
        <p className="text-xs text-marine-blue-800 flex items-center">
          <Play className="mr-2" size={14} />
          <strong>Note:</strong> Choose your components carefully!
        </p>
      </div>
    </div>
  )
}

export default AgentBuilder 