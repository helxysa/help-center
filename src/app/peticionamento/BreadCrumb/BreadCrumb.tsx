'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

interface BreadcrumbItem {
  label: string;
  href: string;
}

// Mapeamento de URLs para labels mais amigáveis
const routeMap: { [key: string]: string } = {
  'peticionamento': 'Peticionamento Eletrônico',
  'documentos': 'Documentos',
  'processos': 'Processos',
  'consulta': 'Consulta',
  // Adicione mais mapeamentos conforme necessário
}

export default function BreadCrumb() {
  const pathname = usePathname()

  const breadcrumbItems = useMemo(() => {
    // Sempre começa com Home
    const items: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ]

    // Ignora strings vazias e divide o pathname em segmentos
    const segments = pathname.split('/').filter(Boolean)

    // Constrói o caminho progressivamente
    let currentPath = ''
    segments.forEach((segment) => {
      currentPath += `/${segment}`
      items.push({
        label: routeMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
        href: currentPath
      })
    })

    return items
  }, [pathname])

  if (breadcrumbItems.length === 1) return null // Não mostra na página inicial

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-[500px] 1xl:px-[200px] 2xl:px-[250px] 3xl:px-[300px]">
    <nav 
      className="flex px-4 sm:px-5 py-2 sm:py-3 my-4 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 w-full" 
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3 flex-wrap w-full">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            {index > 0 && (
              <svg 
                className="w-3 h-3 mx-1 text-gray-400" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 6 10"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="m1 9 4-4-4-4"
                />
              </svg>
            )}
            <Link 
              href={item.href}
              className={`inline-flex items-center text-sm font-medium ${
                index === breadcrumbItems.length - 1 
                  ? 'text-gray-500 dark:text-gray-400' 
                  : 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200'
              }`}
              aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
            >
              {index === 0 && (
                <svg 
                  className="w-3 h-3 me-2.5" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
              )}
              {item.label}
            </Link>
          </li>
        ))}
       </ol>
      </nav>
    </div>
  )
}