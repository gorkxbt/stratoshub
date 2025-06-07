import { Vote, Coins, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const TokenUseCases = () => {
  const useCases = [
    {
      title: 'Governance',
      description: 'Participate in the StratosHub DAO and influence the future of the platform.',
      icon: <Vote size={48} className="text-sky-blue-600" />,
      details: [
        'Vote on platform upgrades and new features',
        'Propose changes to the ecosystem',
        'Shape the future of decentralized AI',
        'Democratic decision-making process'
      ]
    },
    {
      title: 'Staking',
      description: 'Stake your STRATOS tokens to earn rewards and support the network.',
      icon: <Coins size={48} className="text-marine-blue-600" />,
      details: [
        'Earn passive income through staking rewards',
        'Support network security and stability',
        'Flexible staking periods available',
        'Compound your earnings automatically'
      ]
    },
    {
      title: 'Agent Licensing',
      description: 'Use STRATOS to license and deploy AI agents on the marketplace.',
      icon: <ShieldCheck size={48} className="text-sky-blue-700" />,
      details: [
        'Purchase premium AI agent licenses',
        'Access advanced agent capabilities',
        'Deploy agents across multiple platforms',
        'Exclusive access to cutting-edge AI models'
      ]
    }
  ]

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {useCases.map((useCase, index) => (
          <div
            key={useCase.title}
            className="bg-white/30 backdrop-blur-xl rounded-xl shadow-lg border border-white/40 p-6 hover:shadow-xl hover:bg-white/40 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in flex flex-col h-full"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-sky-blue-50 to-marine-blue-50 rounded-full">
              {useCase.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-4 text-center">
            {useCase.title}
          </h3>

          {/* Description */}
          <p className="text-gray-100 drop-shadow-md mb-6 text-center">
            {useCase.description}
          </p>

          {/* Details */}
          <ul className="space-y-2 flex-1">
            {useCase.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 shadow-lg"></div>
                <span className="text-sm text-gray-100 drop-shadow-sm">{detail}</span>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <div className="mt-6 text-center">
            <Link href="/learn">
              <button className="bg-gradient-to-r from-sky-blue-600 to-marine-blue-600 hover:from-sky-blue-700 hover:to-marine-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default TokenUseCases 