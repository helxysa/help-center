import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Guia - Base de Conhecimento',
  description: 'Guia de peticionamento',
}

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <main>
        {children}
      </main>
    </div>
  )
}