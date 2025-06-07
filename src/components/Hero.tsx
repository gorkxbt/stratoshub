import StratosLogo from './StratosLogo'
import Spline from '@splinetool/react-spline/next'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/Vl2hSMgfauPkqHJg/scene.splinecode" 
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-2xl">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <StratosLogo className="w-32 h-32 mx-auto" />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up drop-shadow-lg">
          StratosHub: Decentralized AI Agents
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-100 mb-12 animate-slide-up drop-shadow-md" style={{animationDelay: '0.2s'}}>
          Build, Trade, and Deploy AI Agents on Solana
        </p>

        {/* Optional CTA Button */}
        <Link href="/hub">
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-slide-up border border-white/30" style={{animationDelay: '0.4s'}}>
            Get Started
          </button>
        </Link>
      </div>

    </section>
  )
}

export default Hero 