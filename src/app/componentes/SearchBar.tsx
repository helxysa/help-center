'use client'

import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'

interface SearchBarProps {
  onSearch: (searchTerm: string) => void
  placeholder?: string
}

export default function SearchBar({ onSearch, placeholder = 'Pesquisar...' }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setSearchTerm('')
    onSearch('')
  }

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Como posso ajudar?</h1>
      <div className="relative flex items-center">
        <FiSearch className="absolute left-3 text-gray-400 text-2xl" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder={placeholder}
          className="w-full py-3 pl-12 pr-12 text-base md:text-lg
                     border border-gray-300 rounded-lg
                     focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                     transition-all duration-200
                     placeholder-gray-400"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 text-gray-400 hover:text-gray-600
                       transition-colors duration-200"
          >
            <IoMdClose className="text-2xl" />
          </button>
        )}
      </div>
    </div>
  )
}