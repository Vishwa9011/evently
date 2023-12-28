import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1 className='text-2xl'>Evently</h1>
      <Button variant={"default"} className='m-5'>Hello</Button>
    </main>
  )
}
