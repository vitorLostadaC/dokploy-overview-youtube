/* eslint-disable @next/next/no-img-element */
import logo from './logo.png'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={logo.src} alt="Logo" width={300} height={300} />
      <h1 className="text-8xl font-bold mt-8 mb-4 text-red-500">
        Se inscreva no canal
      </h1>
      <p className="text-xl text-gray-700">Vitor Cunha Code</p>
    </main>
  )
}
