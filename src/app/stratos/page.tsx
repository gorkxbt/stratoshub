import TokenUseCases from '@/components/TokenUseCases'
import Spline from '@splinetool/react-spline/next'

export default function StratosPage() {
  return (
    <div className="relative min-h-screen pt-16 overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/Vl2hSMgfauPkqHJg/scene.splinecode" 
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12 bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">$STRATOS Token</h1>
          <p className="text-xl text-gray-100 drop-shadow-md">Powering the StratosHub ecosystem</p>
        </div>
        <TokenUseCases />
      </div>
    </div>
  )
} 