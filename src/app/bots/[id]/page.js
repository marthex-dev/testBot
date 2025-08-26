import Image from 'next/image'
import Link from 'next/link'
import { getBotById } from '@/data/bots'

export default function BotDetailPage({ params }) {
  const bot = getBotById(params.id)

  if (!bot) {
    return (
      <main className="bg-[#1a1a1a] min-h-screen flex items-center justify-center">
        <div className="text-white text-2xl">Bot bulunamadı</div>
      </main>
    )
  }

  return (
    <main className="bg-[#1a1a1a] min-h-screen py-20">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-4">
          {bot.images.map((img, idx) => (
            <div key={idx} className="relative w-full h-40 sm:h-56 bg-[#232323] rounded-lg overflow-hidden">
              <Image src={img} alt={`${bot.name} ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white mb-4">{bot.name}</h1>
          <p className="text-gray-300 mb-4">{bot.description}</p>
          <div className="text-3xl font-bold text-[#678FFF] mb-6">{bot.price}</div>
          <h3 className="text-white font-semibold mb-2">Özellikler</h3>
          <ul className="space-y-2 text-gray-300 mb-8">
            {bot.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#678FFF] mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <Link
              href={`/bots/${bot.id}/order`}
              className="bg-[#678FFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4A55A2] transition-colors duration-300 text-center"
            >
              Sipariş Ver
            </Link>
            <Link
              href="/bots"
              className="bg-transparent border-2 border-[#678FFF] text-[#678FFF] px-8 py-3 rounded-lg font-semibold hover:bg-[#678FFF] hover:text-white transition-colors duration-300 text-center"
            >
              Geri Dön
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
