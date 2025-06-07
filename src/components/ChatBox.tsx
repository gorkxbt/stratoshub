'use client'

import { useState } from 'react'
import { Send, Bot } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatBoxProps {
  agentComponents: any[]
  isDisabled?: boolean
}

const ChatBox = ({ agentComponents, isDisabled = false }: ChatBoxProps) => {
  const [messages, setMessages] = useState<Message[]>(
    isDisabled ? [] : [
      {
        id: '1',
        text: 'Hello! I\'m your AI agent. I\'ve been configured with the components you selected. How can I help you today?',
        isUser: false,
        timestamp: new Date()
      }
    ]
  )
  const [inputValue, setInputValue] = useState('')

  const sendMessage = () => {
    if (inputValue.trim() && !isDisabled) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        isUser: true,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, userMessage])
      setInputValue('')

      // Simulate AI response
      setTimeout(() => {
        const agentResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: `Thanks for your message! I'm processing this using my ${agentComponents.map(c => c.title).join(', ')} components. This is a demo response.`,
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, agentResponse])
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 h-full flex flex-col ${isDisabled ? 'opacity-60 pointer-events-none' : ''}`}>
      <div className="p-4 border-b border-gray-200/50 flex-shrink-0">
        <h3 className="text-lg font-semibold text-marine-blue-900 flex items-center">
          <div className="p-2 bg-gradient-to-r from-sky-blue-600 to-marine-blue-600 rounded-lg mr-3">
            <Bot className="text-white" size={16} />
          </div>
          Agent Chat
        </h3>
        {isDisabled && (
          <p className="text-sm text-gray-500 mt-2">Create an agent to start chatting</p>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto min-h-0">
        {isDisabled ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-400">
              <Bot size={48} className="mx-auto mb-3" />
              <p className="text-lg font-medium">AI Agent Chat</p>
              <p className="text-sm">Build your agent to unlock chat functionality</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-sky-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200/50 flex-shrink-0">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={isDisabled ? "Create an agent to start chatting..." : "Talk to your agent..."}
            disabled={isDisabled}
            className="flex-1 px-3 py-2 border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed bg-white/50 backdrop-blur-sm text-sm"
          />
          <button
            onClick={sendMessage}
            disabled={isDisabled}
            className="bg-gradient-to-r from-sky-blue-600 to-marine-blue-600 hover:from-sky-blue-700 hover:to-marine-blue-700 text-white p-2 rounded-lg transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox 