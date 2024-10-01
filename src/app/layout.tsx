import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asistente Virtual',
  description: 'Un chatbot con preguntas preprogramadas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="bg-primary text-primary-foreground p-4">
          <h1 className="text-2xl font-bold">Biblioteca Virtual Cujae</h1>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
