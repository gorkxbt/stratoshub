'use client'

import { useState } from 'react'
import MarketplaceModal from '@/components/MarketplaceModal'

export default function MarketplacePage() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-marine-blue-900 mb-4">AI Agent Marketplace</h1>
          <p className="text-xl text-gray-600">Discover and deploy powerful AI agents</p>
        </div>
      </div>
      
      {isModalOpen && (
        <MarketplaceModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
} 