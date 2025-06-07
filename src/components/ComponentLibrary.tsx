'use client'

import { useDrag } from 'react-dnd'
import { Database, Brain, Target, Zap } from 'lucide-react'

interface ComponentItemProps {
  type: string
  title: string
  description: string
  icon: React.ReactNode
}

const ComponentItem = ({ type, title, description, icon }: ComponentItemProps) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'component',
    item: { type, title, description },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <div
      ref={drag as any}
      className={`p-3 bg-gradient-to-r from-white to-sky-blue-50/30 rounded-lg border border-sky-blue-200/40 shadow-sm 
        cursor-grab active:cursor-grabbing transform transition-all duration-200 hover:scale-102 hover:shadow-md
        ${isDragging ? 'opacity-50 rotate-1' : 'opacity-100'}`}
    >
      <div className="flex items-start space-x-3">
        <div className="p-2 bg-gradient-to-r from-sky-blue-600 to-marine-blue-600 rounded-lg flex-shrink-0 shadow-sm">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-marine-blue-900 text-sm mb-1">{title}</h3>
          <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

const ComponentLibrary = () => {
  const components = [
    {
      type: 'data-source',
      title: 'Data Source',
      description: 'Select the data source for your agent.',
      icon: <Database size={20} />
    },
    {
      type: 'model-type',
      title: 'Model Type',
      description: 'Choose the AI model to power your agent (e.g., Grok 3, Llama 4, XGBoost, GNNs, PPO).',
      icon: <Brain size={20} />
    },
    {
      type: 'strategy',
      title: 'Strategy',
      description: 'Define the strategy your agent will follow.',
      icon: <Target size={20} />
    },
    {
      type: 'execution',
      title: 'Execution Layer',
      description: 'Configure how your agent executes tasks.',
      icon: <Zap size={20} />
    }
  ]

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-5 h-full flex flex-col">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-marine-blue-900 mb-2 flex items-center">
          <div className="p-2 bg-gradient-to-r from-sky-blue-600 to-marine-blue-600 rounded-lg mr-3">
            <Database className="text-white" size={18} />
          </div>
          Component Library
        </h2>
        <p className="text-sm text-gray-600">Drag components to build your agent</p>
      </div>
      
      <div className="space-y-3 flex-1 overflow-y-auto">
        {components.map((component) => (
          <ComponentItem
            key={component.type}
            type={component.type}
            title={component.title}
            description={component.description}
            icon={component.icon}
          />
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-gradient-to-r from-sky-blue-50 to-marine-blue-50 rounded-lg border border-sky-blue-200/30">
        <p className="text-xs text-sky-blue-800 flex items-center">
          <Target className="mr-2" size={14} />
          <strong>Tip:</strong> Drag components to the builder
        </p>
      </div>
    </div>
  )
}

export default ComponentLibrary 