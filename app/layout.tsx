import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Rodrigo Lübke Psicoterapia | Psicólogo em Sinop-MT',
  description: 'Psicoterapia para adultos com foco em saúde mental, autoconhecimento e bem-estar. Atendimento online e presencial em Sinop-MT. Agende sua consulta com Rodrigo Lübke, CRP 18/04819.',
  keywords: [
    'Psicólogo',
    'Psicoterapia',
    'Saúde Mental',
    'Sinop',
    'Terapia',
    'Rodrigo Lübke',
    'CRP 18/04819',
    'TCC',
    'ACT',
    'Atendimento Online',
    'Psicólogo em Sinop',
    'Psicólogo Online'
  ],
  openGraph: {
    title: 'Rodrigo Lübke Psicoterapia',
    description: 'Psicoterapia para adultos com foco em saúde mental, autoconhecimento e bem-estar. Atendimento online e presencial em Sinop-MT.',
    url: 'https://rodrigolubke.com.br',
    siteName: 'Rodrigo Lübke Psicoterapia',
    images: [
      {
        url: '/rodrigologo.png',
        width: 800,
        height: 600,
        alt: 'Rodrigo Lübke Psicoterapia',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodrigo Lübke Psicoterapia',
    description: 'Psicoterapia para adultos com foco em saúde mental, autoconhecimento e bem-estar. Atendimento online e presencial em Sinop-MT.',
    images: ['/rodrigologo.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TZBGJRPK');
        `}} />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZBGJRPK" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}
