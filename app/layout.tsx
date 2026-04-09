import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rabi Ali — Data Engineer · Analyst · ML Engineer',
  description: 'Portfolio of Rabi Ali — specializing in Data Engineering, Data Analytics, and Machine Learning. Building scalable pipelines, predictive models, and data-driven solutions.',
  keywords: 'Rabi Ali, Data Engineer, Data Analyst, ML Engineer, Python, SQL, Machine Learning',
  openGraph: {
    title: 'Rabi Ali — Data Engineer · Analyst · ML Engineer',
    description: 'Portfolio of Rabi Ali — Data Engineering, Analytics & ML',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
