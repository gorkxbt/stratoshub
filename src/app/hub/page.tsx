import AgentForge from '@/components/AgentForge'
import StratosLogo from '@/components/StratosLogo'
import { Bot, Sparkles, Zap, Target } from 'lucide-react'

export default function HubPage() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 via-sky-blue-50 to-marine-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-blue-600/10 to-marine-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <StratosLogo className="w-24 h-24" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-marine-blue-900 via-sky-blue-700 to-marine-blue-900 bg-clip-text text-transparent mb-6">
              The Hub
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Welcome to the future of AI agent creation. Build, customize, and deploy intelligent agents 
              with our intuitive drag-and-drop interface.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: <Sparkles size={16} />, text: 'No-Code Builder' },
                { icon: <Zap size={16} />, text: 'Real-Time Chat' },
                { icon: <Target size={16} />, text: 'Custom Components' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-sky-blue-200 shadow-sm">
                  <span className="text-sky-blue-600">{feature.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-sky-blue-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-marine-blue-200/30 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-sky-blue-300/30 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Instructions Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/40 shadow-lg">
            <h2 className="text-lg font-semibold text-marine-blue-900 mb-3 flex items-center">
              <Bot className="mr-2 text-sky-blue-600" size={20} />
              Getting Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-sky-blue-100 text-sky-blue-700 rounded-full p-2 text-sm font-bold min-w-[32px] h-8 flex items-center justify-center">1</div>
                <div>
                  <h3 className="font-medium text-gray-800">Choose Components</h3>
                  <p className="text-sm text-gray-600">Drag components from the library to build your agent</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-marine-blue-100 text-marine-blue-700 rounded-full p-2 text-sm font-bold min-w-[32px] h-8 flex items-center justify-center">2</div>
                <div>
                  <h3 className="font-medium text-gray-800">Configure Agent</h3>
                  <p className="text-sm text-gray-600">Customize your agent's behavior and capabilities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-sky-blue-100 text-sky-blue-700 rounded-full p-2 text-sm font-bold min-w-[32px] h-8 flex items-center justify-center">3</div>
                <div>
                  <h3 className="font-medium text-gray-800">Start Chatting</h3>
                  <p className="text-sm text-gray-600">Interact with your AI agent in real-time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Forge */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
            <AgentForge />
          </div>
        </div>
      </div>
    </div>
  )
} 