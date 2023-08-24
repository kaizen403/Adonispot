import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'


const inter = Inter({ subsets: ['latin'] })
const lexend = Lexend({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'SigmaGram',
  description: 'Socialmedia for sigmas',
  icons: { icon: '/assets/favicon.ico' },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={lexend.className}>
        <Topbar/>
        <main className='flex flex-row'>
          <LeftSidebar/>
          <section className='main-container babyhome'>
            <div className='w-full  mt-[-28px] max-w-4xl'>

              {children}

            </div>
          </section>
          <RightSidebar/>
        </main>
        <Bottombar/>
        </body>
    </html>
    </ClerkProvider>
  )
}