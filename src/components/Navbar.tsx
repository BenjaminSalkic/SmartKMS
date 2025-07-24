import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-purple-600">
                SmartKMS
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/dashboard" 
              className={`px-4 py-2 text-sm font-medium transition duration-200 rounded-md ${
                isActive('/dashboard') 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/knowledge-management" 
              className={`px-4 py-2 text-sm font-medium transition duration-200 rounded-md ${
                isActive('/knowledge-management') 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
              }`}
            >
              Knowledge Management
            </Link>
            <Link 
              to="/chat" 
              className={`px-4 py-2 text-sm font-medium transition duration-200 rounded-md ${
                isActive('/chat') 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
              }`}
            >
              Chat
            </Link>
            <Link 
              to="/login" 
              className={`px-6 py-2 text-sm font-medium transition duration-200 rounded-md ml-4 ${
                isActive('/login') 
                  ? 'bg-purple-700 text-white' 
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              Login
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 p-2 rounded-md transition duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white border-t border-gray-200">
            <Link 
              to="/dashboard" 
              className={`block px-4 py-3 text-base font-medium rounded-md transition duration-200 ${
                isActive('/dashboard') 
                  ? 'text-purple-600 bg-purple-50 border-l-4 border-purple-600' 
                  : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/knowledge-management" 
              className={`block px-4 py-3 text-base font-medium rounded-md transition duration-200 ${
                isActive('/knowledge-management') 
                  ? 'text-purple-600 bg-purple-50 border-l-4 border-purple-600' 
                  : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Knowledge Management
            </Link>
            <Link 
              to="/chat" 
              className={`block px-4 py-3 text-base font-medium rounded-md transition duration-200 ${
                isActive('/chat') 
                  ? 'text-purple-600 bg-purple-50 border-l-4 border-purple-600' 
                  : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Chat
            </Link>
            <Link 
              to="/login" 
              className={`block px-4 py-3 text-base font-medium rounded-md transition duration-200 ${
                isActive('/login') 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar