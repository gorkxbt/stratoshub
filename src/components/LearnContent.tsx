'use client'

import { useState } from 'react'
import { Bot, Zap, Shield, Users, Target, Database, Brain, Coins, ChevronRight, Calendar, CheckCircle, Circle, Layers, Network, Globe, Lock } from 'lucide-react'

const LearnContent = () => {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Overview', icon: <Globe size={20} /> },
    { id: 'mcp', title: 'MCP Framework', icon: <Layers size={20} /> },
    { id: 'architecture', title: 'Architecture', icon: <Network size={20} /> },
    { id: 'security', title: 'Security', icon: <Lock size={20} /> }
  ]

  const mcpComponents = [
    {
      title: 'Model',
      description: 'AI engines powering decision-making',
      features: ['Grok 3', 'Llama 4', 'XGBoost', 'GNNs', 'PPO'],
      icon: <Brain className="text-white" size={32} />,
      color: 'from-sky-blue-500 to-sky-blue-600'
    },
    {
      title: 'Context',
      description: 'Real-time data interpretation',
      features: ['DeFi Protocols', 'Social Networks', 'Governance', 'Market Data'],
      icon: <Database className="text-white" size={32} />,
      color: 'from-marine-blue-500 to-marine-blue-600'
    },
    {
      title: 'Protocol',
      description: 'Standardized communication layer',
      features: ['Interoperability', 'Modularity', 'Collaboration', 'Independence'],
      icon: <Network className="text-white" size={32} />,
      color: 'from-sky-blue-600 to-marine-blue-600'
    }
  ]

  const architectureFeatures = [
    {
      title: 'Solana Blockchain',
      description: 'High-speed, low-cost infrastructure',
      icon: <Zap className="text-sky-blue-600" size={24} />
    },
    {
      title: 'Hybrid Architecture',
      description: 'On-chain governance, off-chain AI processing',
      icon: <Bot className="text-marine-blue-600" size={24} />
    },
    {
      title: 'Decentralized Storage',
      description: 'Arweave and IPFS for permanent data storage',
      icon: <Database className="text-sky-blue-600" size={24} />
    },
    {
      title: 'Security Audits',
      description: 'Smart contracts audited by OtterSec and Halborn',
      icon: <Shield className="text-marine-blue-600" size={24} />
    }
  ]



  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Key Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-3">
                  <Coins className="text-sky-blue-600" size={24} />
                  <span className="ml-2 text-gray-600 text-sm font-medium">Agent Licensing</span>
                </div>
                <div className="text-2xl font-bold text-marine-blue-900">20 STRATOS/month</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-3">
                  <Zap className="text-marine-blue-600" size={24} />
                  <span className="ml-2 text-gray-600 text-sm font-medium">Built on</span>
                </div>
                <div className="text-2xl font-bold text-marine-blue-900">Solana Blockchain</div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-sky-blue-500 to-marine-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <Target className="text-white" size={32} />
                  <h3 className="text-2xl font-bold ml-3">Our Vision</h3>
                </div>
                <p className="text-sky-blue-100 leading-relaxed">
                  To establish StratosHub as the premier decentralized platform where AI agents are democratized, 
                  enabling anyone to create, share, and benefit from intelligent autonomous services in a secure 
                  and transparent ecosystem.
                </p>
              </div>

              <div className="bg-gradient-to-br from-marine-blue-500 to-sky-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <Users className="text-white" size={32} />
                  <h3 className="text-2xl font-bold ml-3">Our Mission</h3>
                </div>
                <ul className="space-y-2 text-sky-blue-100">
                  <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-1 flex-shrink-0" />Develop robust, scalable AI infrastructure</li>
                  <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-1 flex-shrink-0" />Foster open, collaborative community</li>
                  <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-1 flex-shrink-0" />Leverage Solana's blockchain capabilities</li>
                  <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-1 flex-shrink-0" />Provide accessible AI tools for everyone</li>
                </ul>
              </div>
            </div>

            {/* Platform Components */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-marine-blue-900 mb-6 text-center">Platform Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-gray-200 hover:border-sky-blue-300 transition-colors">
                  <div className="flex items-center mb-4">
                    <Bot className="text-sky-blue-600" size={28} />
                    <h4 className="text-xl font-bold text-marine-blue-900 ml-3">Agent Forge</h4>
                  </div>
                  <p className="text-gray-600">No-code, drag-and-drop interface for building AI agents by assembling modular components</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 hover:border-sky-blue-300 transition-colors">
                  <div className="flex items-center mb-4">
                    <Users className="text-marine-blue-600" size={28} />
                    <h4 className="text-xl font-bold text-marine-blue-900 ml-3">Marketplace</h4>
                  </div>
                  <p className="text-gray-600">Transparent and secure platform to browse, license, and deploy AI agents with escrow-protected payments</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 hover:border-sky-blue-300 transition-colors">
                  <div className="flex items-center mb-4">
                    <Target className="text-sky-blue-600" size={28} />
                    <h4 className="text-xl font-bold text-marine-blue-900 ml-3">Command Deck</h4>
                  </div>
                  <p className="text-gray-600">Real-time dashboard providing detailed analytics, performance metrics, and deployment controls</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'mcp':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-marine-blue-900 mb-4">MCP Framework</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                StratosHub's AI agents are built upon the MCP (Model, Context, Protocol) framework, 
                structuring agent intelligence into three interconnected components.
              </p>
            </div>

            {/* MCP Components - Creative Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {mcpComponents.map((component, index) => (
                <div key={index} className="group relative h-full">
                  <div className={`bg-gradient-to-br ${component.color} rounded-2xl p-8 text-white transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 h-full flex flex-col`}>
                    <div className="flex items-center mb-6">
                      {component.icon}
                      <h4 className="text-2xl font-bold ml-3">{component.title}</h4>
                    </div>
                    <p className="text-gray-100 mb-6 flex-grow">{component.description}</p>
                    <div className="space-y-2">
                      {component.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle size={14} className="mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-marine-blue-900 mb-6">AI Agent Capabilities</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Composable', desc: 'Modular components' },
                  { label: 'Adaptive', desc: 'Learning from interactions' },
                  { label: 'Interoperable', desc: 'Web3 protocol compatible' },
                  { label: 'Secure', desc: 'Sandboxed environments' }
                ].map((capability, index) => (
                  <div key={index} className="text-center p-4 rounded-lg border border-gray-200 hover:border-sky-blue-300 transition-colors">
                    <div className="text-lg font-bold text-marine-blue-900 mb-2">{capability.label}</div>
                    <div className="text-sm text-gray-600">{capability.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'architecture':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-marine-blue-900 mb-4">System Architecture</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Built on Solana's high-performance blockchain with hybrid on-chain/off-chain processing 
                for optimal scalability and cost-effectiveness.
              </p>
            </div>

            {/* Architecture Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {architectureFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gray-50 hover:bg-sky-blue-50 transition-colors">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold text-marine-blue-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Stack */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Technology Stack</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h5 className="text-lg font-semibold text-sky-blue-300 mb-3">Blockchain</h5>
                  <ul className="space-y-1">
                    <li className="text-gray-300 text-sm flex items-center">
                      <ChevronRight size={12} className="mr-2" />
                      Solana
                    </li>
                    <li className="text-gray-300 text-sm flex items-center">
                      <ChevronRight size={12} className="mr-2" />
                      Anchor Framework
                    </li>
                    <li className="text-gray-300 text-sm flex items-center">
                      <ChevronRight size={12} className="mr-2" />
                      SPL Tokens
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-sky-blue-300 mb-3">Storage</h5>
                  <ul className="space-y-1">
                    <li className="text-gray-300 text-sm flex items-center">
                      <ChevronRight size={12} className="mr-2" />
                      Arweave
                    </li>
                    <li className="text-gray-300 text-sm flex items-center">
                      <ChevronRight size={12} className="mr-2" />
                      IPFS
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-sky-blue-300 mb-3">Security</h5>
                  <ul className="space-y-1">
                    <li className="text-gray-300 text-sm flex items-center">
                      <ChevronRight size={12} className="mr-2" />
                      Fully Homomorphic Encryption
                    </li>
                    <li className="text-gray-300 text-sm flex items-center">
                      <ChevronRight size={12} className="mr-2" />
                      Decentralized Identity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      case 'security':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-marine-blue-900 mb-4">Security & Privacy</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                StratosHub maintains the highest standards of security and privacy through comprehensive 
                audits, encryption, and decentralized identity protocols.
              </p>
            </div>

            {/* Security Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-sky-blue-50 to-sky-blue-100 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Shield className="text-sky-blue-600" size={32} />
                  <h4 className="text-xl font-bold text-marine-blue-900 ml-3">Smart Contract Audits</h4>
                </div>
                <p className="text-gray-700 mb-4">Comprehensive security audits by leading firms</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-800">
                    <CheckCircle size={14} className="mr-2 text-sky-blue-600" />
                    OtterSec Audited
                  </li>
                  <li className="flex items-center text-sm text-gray-800">
                    <CheckCircle size={14} className="mr-2 text-sky-blue-600" />
                    Halborn Verified
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-marine-blue-50 to-marine-blue-100 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Lock className="text-marine-blue-600" size={32} />
                  <h4 className="text-xl font-bold text-marine-blue-900 ml-3">Privacy Protection</h4>
                </div>
                <p className="text-gray-700 mb-4">Privacy-preserving computation techniques</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-800">
                    <CheckCircle size={14} className="mr-2 text-marine-blue-600" />
                    Fully Homomorphic Encryption
                  </li>
                  <li className="flex items-center text-sm text-gray-800">
                    <CheckCircle size={14} className="mr-2 text-marine-blue-600" />
                    Decentralized Identity
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-sky-blue-50 to-marine-blue-100 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Users className="text-marine-blue-600" size={32} />
                  <h4 className="text-xl font-bold text-marine-blue-900 ml-3">Wallet Integration</h4>
                </div>
                <p className="text-gray-700 mb-4">Secure authentication with popular Solana wallets</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-800">
                    <CheckCircle size={14} className="mr-2 text-sky-blue-600" />
                    Phantom, Solflare, Backpack, Coinbase Wallet
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )



      default:
        return null
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Section Navigation */}
      <div className="bg-white rounded-2xl shadow-lg mb-8 p-2">
        <div className="flex flex-wrap justify-center gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-sky-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-sky-blue-600 hover:bg-sky-blue-50'
              }`}
            >
              {section.icon}
              <span className="ml-2">{section.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="animate-fade-in">
        {renderContent()}
      </div>
    </div>
  )
}

export default LearnContent 