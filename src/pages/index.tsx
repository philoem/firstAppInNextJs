import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log('inter :>> ', inter);
  return (
    <main>
      <h1 className='text-5xl font-bold'>Hello world!!</h1>
    </main>
  )
}
