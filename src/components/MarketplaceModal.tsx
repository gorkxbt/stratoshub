'use client'

import { X, Loader, Bot, Star, Zap, Brain, TrendingUp, Users, Search, Filter, Grid, List } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface MarketplaceModalProps {
  onClose: () => void
}

// Static mock data to avoid hydration issues
const mockAgents = [
  { id: 1, name: 'AlphaBot Genesis', price: '2.5 ETH', floor: '1.8 ETH', volume: '847 ETH', change: '+12.3%', image: '🤖', verified: true },
  { id: 2, name: 'CryptoSage AI', price: '1.9 ETH', floor: '1.2 ETH', volume: '523 ETH', change: '+8.7%', image: '🧙‍♂️', verified: true },
  { id: 3, name: 'TradeMaster Pro', price: '3.2 ETH', floor: '2.1 ETH', volume: '1.2K ETH', change: '+15.2%', image: '📈', verified: true },
  { id: 4, name: 'DeFi Navigator', price: '1.4 ETH', floor: '0.9 ETH', volume: '392 ETH', change: '+5.9%', image: '🧭', verified: false },
  { id: 5, name: 'Yield Hunter AI', price: '2.8 ETH', floor: '2.0 ETH', volume: '678 ETH', change: '+18.4%', image: '🎯', verified: true },
  { id: 6, name: 'MetaBot Elite', price: '4.1 ETH', floor: '3.5 ETH', volume: '1.8K ETH', change: '+22.1%', image: '👾', verified: true },
  { id: 7, name: 'QuantumTrader', price: '1.7 ETH', floor: '1.1 ETH', volume: '445 ETH', change: '+7.2%', image: '⚛️', verified: false },
  { id: 8, name: 'NeuralNet AI', price: '2.3 ETH', floor: '1.6 ETH', volume: '589 ETH', change: '+11.8%', image: '🧠', verified: true },
]

const MarketplaceModal = ({ onClose }: MarketplaceModalProps) => {
  const router = useRouter()
  
  const handleClose = () => {
    router.push('/')
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Marketplace Background - StratosHub Style */}
      <div className="absolute inset-0 bg-gradient-to-br from-marine-blue-900 via-sky-blue-800 to-marine-blue-800 text-white overflow-hidden">
        {/* Top Navigation Bar */}
        <nav className="bg-marine-blue-900/90 backdrop-blur-sm border-b border-sky-blue-500/30 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-sky-blue-400">StratosHub</div>
              <div className="flex space-x-6">
                <a href="#" className="text-sky-blue-200 hover:text-white">Explore</a>
                <a href="#" className="text-sky-blue-200 hover:text-white">Stats</a>
                <a href="#" className="text-sky-blue-200 hover:text-white">Resources</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-blue-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search collections, agents, and accounts"
                  className="bg-marine-blue-800/80 text-white pl-10 pr-4 py-2 rounded-lg w-80 border border-sky-blue-500/50 focus:border-sky-blue-400"
                />
              </div>
              <button className="bg-gradient-to-r from-sky-blue-600 to-marine-blue-600 hover:from-sky-blue-700 hover:to-marine-blue-700 px-6 py-2 rounded-lg font-semibold">
                Connect Wallet
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="p-6">
          {/* Stats Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex space-x-8">
              <div>
                <div className="text-2xl font-bold">8,347</div>
                <div className="text-sky-blue-300 text-sm">Total volume</div>
              </div>
              <div>
                <div className="text-2xl font-bold">2,156</div>
                <div className="text-sky-blue-300 text-sm">Floor price</div>
              </div>
              <div>
                <div className="text-2xl font-bold">15.2%</div>
                <div className="text-sky-blue-300 text-sm">Best offer</div>
              </div>
              <div>
                <div className="text-2xl font-bold">847</div>
                <div className="text-sky-blue-300 text-sm">Listed</div>
              </div>
              <div>
                <div className="text-2xl font-bold">23.4%</div>
                <div className="text-sky-blue-300 text-sm">Owners</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-marine-blue-800/60 px-4 py-2 rounded-lg border border-sky-blue-500/50 hover:border-sky-blue-400">
                <Filter size={16} />
                <span>Filter</span>
              </button>
              <button className="flex items-center space-x-2 bg-marine-blue-800/60 px-4 py-2 rounded-lg border border-sky-blue-500/50 hover:border-sky-blue-400">
                <Grid size={16} />
              </button>
              <button className="flex items-center space-x-2 bg-marine-blue-800/60 px-4 py-2 rounded-lg border border-sky-blue-500/50 hover:border-sky-blue-400">
                <List size={16} />
              </button>
            </div>
          </div>

          {/* AI Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {mockAgents.map((agent) => (
              <div key={agent.id} className="bg-marine-blue-900/60 backdrop-blur-sm rounded-xl border border-sky-blue-500/30 overflow-hidden hover:border-sky-blue-400/60 transition-colors cursor-pointer">
                {/* Agent Image/Avatar */}
                <div className="aspect-square bg-gradient-to-br from-sky-blue-600 to-marine-blue-600 flex items-center justify-center text-4xl">
                  {agent.image}
                </div>
                
                {/* Agent Details */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white truncate">{agent.name}</h3>
                    {agent.verified && (
                      <div className="w-4 h-4 bg-sky-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sky-blue-300 text-sm">Price</span>
                      <span className="text-white font-semibold">{agent.price}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sky-blue-300 text-sm">Floor</span>
                      <span className="text-sky-blue-100 text-sm">{agent.floor}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sky-blue-300 text-sm">Volume</span>
                      <span className="text-sky-blue-100 text-sm">{agent.volume}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sky-blue-300 text-sm">24h</span>
                      <span className={`text-sm font-semibold ${agent.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {agent.change}
                      </span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 bg-gradient-to-r from-sky-blue-600 to-marine-blue-600 hover:from-sky-blue-700 hover:to-marine-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Heavy Blur Overlay */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-[20px]"
        onClick={handleClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-md mx-4 animate-fade-in border border-white/20">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X size={24} />
          </button>
          
          {/* Content */}
          <div className="text-center">
            {/* Loading Animation */}
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-blue-100 rounded-full mb-4">
                <Loader className="w-8 h-8 text-sky-blue-600 animate-spin" />
              </div>
            </div>
            
            {/* Message */}
            <h2 className="text-2xl font-bold text-marine-blue-900 mb-4">
              Marketplace Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              Our AI Agent Marketplace is in final development. You can see the interface behind this modal!
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div className="bg-gradient-to-r from-sky-blue-600 to-marine-blue-600 h-2 rounded-full animate-pulse" style={{width: '85%'}}></div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="bg-sky-blue-600 hover:bg-sky-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketplaceModal 