'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const menuItems = [
    {
      path: '#acessar-site-peticionamento',
      name: 'Como acessar o SITE DE PETICIONAMENTO',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
      subItems: [
        { path: '#acessar-site-peticionamento', name: '1. Entrar no site de peticionamento' }
      ]
    },
    {
      path: '#acessar-ministerio-publico1',
      name: 'Acessando Minhas Empresas',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
      subItems: [
        { path: '#acessar-ministerio-publico1', name: '1. Ir em Minhas Empresas' },
        { path: '#acessar-ministerio-publico2', name: '2. Clicar em Minhas Empresas' }
      ]
    },
    {
      path: '#menu-representantes1',
      name: 'Como acessar os REPRESENTANTES',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
      subItems: [
        { path: '#menu-representantes1', name: '1. Gerenciar representantes' },
        { path: '#menu-representantes2', name: '2. Menu de representantes' }
      ]
    },
    {
      path: '#adicionar-representante1',
      name: 'Adicionando um NOVO REPRESENTANTE',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
      subItems: [
        { path: '#adicionar-representante1', name: '1. Como adicionar um representante' },
        { path: '#adicionar-representante2', name: '2. Preencher formulário de adicionar representante' },
        { path: '#adicionar-representante3', name: '3. Clicar em enviar para adicionar esse Representante' },
        { path: '#adicionar-representante4', name: '4. Menu de representantes' }
      ]
    },
    {
      path: '#clicar-opcao1-peticao',
      name: 'Como criar uma NOVA PETIÇÃO',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
      subItems: [
        { path: '#clicar-opcao1-peticao', name: '1. Irá clicar em petições' },
        { path: '#clicar-opcao2-peticao', name: '2. Clicar na opção nova petição' },
        { path: '#clicar-opcao3-peticao', name: '3. Preencher o formulário de nova petição' },
        { path: '#clicar-opcao4-peticao', name: '4. Enviar petição' }
      ]
    },
    {
      path: '#clicar-opcao1-peticaoincidental',
      name: 'Como fazer NOVA PETIÇÃO INCIDENTAL',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
      subItems: [
        { path: '#clicar-opcao1-peticaoincidental', name: '1. Irá clicar em petições' },
        { path: '#clicar-opcao2-peticaoincidental', name: '2. Clicar na opção nova incidental' },
        { path: '#clicar-opcao3-peticaoincidental', name: '3. Preencher o formulário' },
        { path: '#clicar-opcao4-peticaoincidental', name: '4. Adicionando novo arquivo' },
        { path: '#clicar-opcao5-peticaoincidental', name: '5. Enviar petição incidental' }
      ]
    },
    {
      path: '#consultar-processos1',
      name: 'Como consultar SEUS PROCESSOS',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
      subItems: [
        { path: '#consultar-processos1', name: '1. Consultar processos' },
        { path: '#consultar-processos2', name: '2. Menu inicial' },
        { path: '#consultar-processos3', name: '3. Aba de meus processos administrativos' },
        { path: '#consultar-processos4', name: '4. Aba de minhas petições' },
        { path: '#consultar-processos5', name: '5. Aba de minhas incidentais' },
        { path: '#', name: '6. Aba de assinaturas pendentes' }
      ]
    }
  ]

  return (
    <>
      {/* Botão Toggle Sidebar - Mais responsivo e melhor posicionado */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 transition-all duration-300 ease-in-out z-50 
          ${isSidebarOpen ? 'left-[280px] sm:left-[300px] lg:left-[320px]' : 'left-4'}
          p-2.5 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700
          flex items-center justify-center
          lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-400`}
      >
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isSidebarOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Sidebar - Melhor responsividade e visual */}
      <aside
        className={`fixed left-0 top-0 h-screen 
          transition-all duration-300 ease-in-out
          bg-gray-800 text-white shadow-xl
          ${isSidebarOpen 
            ? 'w-[280px] md:w-[320px] lg:w-[380px] xl:w-[420px]' 
            : 'w-0 -left-[420px]'
          }
          lg:left-0 lg:w-[380px] xl:w-[420px]
          sticky z-50`}
      >
        {/* Container principal com padding responsivo */}
        <div className="h-full flex flex-col  sm:p-5 lg:p-6">
          {/* Cabeçalho */}
          <header className="flex-shrink-0 pb-4 sm:pb-5 lg:pb-6 border-b border-gray-700">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
              Peticionamento Eletrônico
            </h1>
          </header>

          {/* Área de navegação com scroll */}
          <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 sm:py-5 lg:py-6
            scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 ">
            <ul className="space-y-2 sm:space-y-4 mr-5">
              {menuItems.map((item) => (
                <li key={item.path}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={toggleDropdown}
                        className="w-full flex items-center justify-between
                          p-2.5 sm:p-3 rounded-lg
                          hover:bg-gray-700 active:bg-gray-600
                          transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <span className="flex-shrink-0">{item.icon}</span>
                          <span className="text-sm sm:text-base truncate">
                            {item.name}
                          </span>
                        </div>
                        <svg
                          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200
                            ${isDropdownOpen ? 'rotate-180' : ''}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Subitems com melhor espaçamento e visual */}
                      {isDropdownOpen && (
                        <ul className="mt-1 ml-4 sm:ml-6 space-y-1">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              <Link
                                href={subItem.path}
                                className={`block p-2.5 sm:p-3 rounded-lg
                                  text-sm sm:text-base
                                  transition-colors duration-200
                                  hover:bg-gray-700 active:bg-gray-600
                                  ${pathname === subItem.path 
                                    ? 'bg-blue-600 hover:bg-blue-700' 
                                    : ''
                                  }`}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`flex items-center space-x-3
                        p-2.5 sm:p-3 rounded-lg
                        text-sm sm:text-base
                        transition-colors duration-200
                        hover:bg-gray-700 active:bg-gray-600
                        ${pathname === item.path 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : ''
                        }`}
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="truncate">{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}