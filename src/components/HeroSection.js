import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2B1B41] via-[#1F1B26] to-[#3B1B22] pt-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
             WhizeCode sizlere en iyi çözümleri sunuyor.
            </h1>
            
            <p className="text-base sm:text-lg text-gray-300 max-w-xl">
              Otomatikleşmiş sistemler sayesinde Özelleştirilmiş botları hizmetinize sunuyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <button className="bg-[#678FFF] hover:bg-[#678FFF]/90 text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                </svg>
                Discord Sunucumuza Katıl
              </button>
            </div>
          </div>

          {/* Right Column - Device Image */}
          <div className="relative lg:justify-self-end w-full">
            <div className="relative w-full max-w-[700px] mx-auto">
              <Image
                src="/devices-dark.png"
                alt="DuckDuckGo on multiple devices"
                width={1000}
                height={750}
                className="w-full h-auto transform scale-105 lg:scale-110"
                priority
              />
              
              {/* Reflection/Shadow Effect */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent transform translate-y-1/2 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 