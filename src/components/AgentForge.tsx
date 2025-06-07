'use client'

import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ComponentLibrary from './ComponentLibrary'
import AgentBuilder from './AgentBuilder'
import ChatBox from './ChatBox'

const AgentForge = () => {
  const [hasCreatedAgent, setHasCreatedAgent] = useState(false)
  const [agentComponents, setAgentComponents] = useState<any[]>([])

  const handleAgentCreated = (components: any[]) => {
    setAgentComponents(components)
    setHasCreatedAgent(true)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col lg:flex-row gap-6 min-h-[85vh]">
        {/* Component Library - Left Side */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <ComponentLibrary />
        </div>

        {/* Agent Builder - Center */}
        <div className="flex-1 min-w-0">
          <AgentBuilder onAgentCreated={handleAgentCreated} />
        </div>

        {/* ChatBox - Right Side */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <ChatBox agentComponents={agentComponents} isDisabled={!hasCreatedAgent} />
        </div>
      </div>
    </DndProvider>
  )
}

export default AgentForge 