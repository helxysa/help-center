'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/sobre" className="hover:text-gray-300">
              Sobre
            </Link>
            <Link href="/servicos" className="hover:text-gray-300">
              Serviços
            </Link>
            <Link href="/contato" className="hover:text-gray-300">
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
              >
                Home
              </Link>
              <Link
                href="/sobre"
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
              >
                Sobre
              </Link>
              <Link
                href="/servicos"
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
              >
                Serviços
              </Link>
              <Link
                href="/contato"
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}