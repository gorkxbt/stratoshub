import { Twitter, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            © 2025 StratosHub
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://twitter.com/stratoshub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-sky-blue-600 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/stratoshub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-sky-blue-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 