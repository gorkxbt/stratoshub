import Image from 'next/image'

interface StratosLogoProps {
  className?: string
}

const StratosLogo = ({ className = "w-32 h-32" }: StratosLogoProps) => {
  return (
    <div className={className}>
      <Image
        src="/stratos.jpg"
        alt="StratosHub Logo"
        width={128}
        height={128}
        className="w-full h-full object-contain rounded-lg"
        priority
      />
    </div>
  )
}

export default StratosLogo 