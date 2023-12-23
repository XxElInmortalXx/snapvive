import { Roboto } from 'next/font/google'
import 'remixicon/fonts/remixicon.css'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata = {
  title: 'Social media',
  description: 'Social media app with Next.js'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${roboto.className} bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-100 text-indigo-950`}
      >
        {children}
      </body>
    </html>
  )
}
