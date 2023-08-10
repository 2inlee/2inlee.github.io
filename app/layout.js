import { Inter } from 'next/font/google'
import Footer from './components/Footer';
import Header from './components/Header';
import Mycard from './components/Mycard';
import Intorduce from './components/Introduce';
import Techlist from './components/Techlist';
import Background from './components/Background';
import About from './components/About';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inho Lee | portfolio',
  description: 'Inho Lee | portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <Intorduce></Intorduce>
        <Mycard></Mycard>
        {children}
        <About></About>
        <Background></Background>
        <Techlist></Techlist>
        <Footer></Footer>
      </body>
    </html>
  )
}
