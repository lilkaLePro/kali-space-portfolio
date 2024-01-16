import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Switch } from '@/components/ui/switch'
import { Header } from '@/components/header/page'

const inter = Inter({ subsets: ['latin'] })
{/**voire les autres Metadata  */}
{/**voire l'utilisation de swicth et la confg de shad cdn */}
export const metadata: Metadata = {
  title: 'Kaly Diallo',
  description: 'developpeur, web designer et createur ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} w-full flex gap-5 flex-col md:flex-row justify-center `} >
     <header className='md:mt-14'>
        <Header />
      </header>
       <section className='w-full  h-screen overflow-auto md:mt-10  px-2 md:max-w-3xl '>
       {children}

       <p>suivez moi sur X</p>
       </section>
      </body>
    </html>

  )

}
