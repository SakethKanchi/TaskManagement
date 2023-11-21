import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { ClerkProvider, auth } from "@clerk/nextjs";


import './globals.css'
import Sidebar from './components/Sidebar/Sidebar'
import GlobalStylesProvider from './providers/GlobalStylesProvider'
import ContextProvider from './providers/ContextProvider'
import NextTopLoader from 'nextjs-toploader';

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Task Management',
  description: 'Task Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { userId } = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body className={nunito.className}>
          <NextTopLoader
            height={2}
            color='#27AE06'
            easing="cubic-bezier(0.53,0.21,0,1)"
            showSpinner={false}
          />
          <ContextProvider>
            <GlobalStylesProvider>
              {userId && <Sidebar />}
              <div className='w-full'>{children}</div>
            </GlobalStylesProvider>
          </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
