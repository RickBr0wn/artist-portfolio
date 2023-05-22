import Footer from './components/footer'
import Navbar from './components/navbar'
import ScreenSizeIndicator from './components/screen-size-indicator'
import './globals.css'
import localFont from 'next/font/local'

export const metadata = {
  title: 'Cheryl Humprhies - Visual Artist',
  description: 'Cheryl Humphries is a visual artist based in Rye, UK.',
}

const spaceFont = localFont({
  src: '/fonts/space_font.otf',
  display: 'swap',
  variable: '--space-font',
})

const bodyFont = localFont({
  src: '/fonts/body_font.ttf',
  display: 'swap',
  variable: '--body-font',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceFont.variable} ${bodyFont.variable}`}>
      <body className="h-screen">
        <ScreenSizeIndicator />
        <Navbar />
        <div className="max-w-[750px] mx-auto py-12">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
