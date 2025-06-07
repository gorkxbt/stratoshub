import LearnContent from '@/components/LearnContent'

export default function LearnPage() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 via-sky-blue-50 to-marine-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-marine-blue-900 mb-4">Learn About StratosHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the technology, vision, and innovation behind the world's first decentralized AI agent marketplace
          </p>
        </div>
        <LearnContent />
      </div>
    </div>
  )
} 