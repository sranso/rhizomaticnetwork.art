import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Image
      alt="Mountains"
      src='/IMG_5857.gif'
      quality={100}
      fill
      sizes="100vw"
      className='object-cover'
    />
      <p>welcome</p>
    </main>
  )
}
