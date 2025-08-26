'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = parseInt(value.replace(/[^0-9]/g, ''))
    const incrementTime = duration * 1000 / end
    
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [value, duration])

  return (
    <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
      {count}{value.includes('+') ? '+' : value.includes('%') ? '%' : ''}
    </div>
  )
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: 'Mehmet Yılmaz',
      role: 'Kurucu & CEO',
      image: '/team/founder.jpg',
      expertise: ['Backend', 'System Architecture'],
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    // Diğer takım üyeleri...
  ]

  return (
    <main className="min-h-screen bg-[#1F1B26]">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden bg-[#0D0B14]">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/patterns/grid.png')] opacity-10" 
                 style={{ backgroundSize: '24px 24px' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D0B14] via-[#0D0B14]/95 to-[#0D0B14]" />
          </div>

          {/* Subtle Gradient Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-[#5865F2]/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#5865F2]/5 rounded-full filter blur-3xl" />
          </div>

          {/* Accent Lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 w-full h-px bg-[#5865F2]/10 transform -translate-y-1/2" />
            <div className="absolute top-1/2 w-full h-px bg-[#5865F2]/5 transform -translate-y-1/2 rotate-3" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col items-center space-y-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                <span className="bg-gradient-to-r from-[#5865F2] to-[#7289DA] bg-clip-text text-transparent">
                  Geleceği Şekillendiriyoruz
                </span>
              </h1>
              <p className="text-[#B9BBBE] text-lg max-w-2xl mx-auto">
                Discord botları geliştirme ve barındırma konusunda
                <span className="text-[#5865F2] font-medium mx-1">
                  Türkiye'nin lider platformu
                </span>
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <Link
                href="/register"
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
              >
                Hemen Başla
              </Link>
              <Link
                href="/contact"
                className="bg-[#2C2F33] hover:bg-[#383B3E] text-[#B9BBBE] px-6 py-2 rounded-md font-medium transition-colors duration-200"
              >
                İletişime Geç
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#5865F2]/10" />
      </section>


      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/about/mission.jpg"
                  alt="Misyonumuz"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-white">
                Misyonumuz
              </h2>
              <p className="text-gray-300">
                Discord topluluklarını güçlendirmek ve bot geliştiricilerine modern, güvenilir ve 
                ölçeklenebilir bir platform sunmak için buradayız.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { title: 'Modern Altyapı', description: 'En son teknolojiler' },
                  { title: 'Ölçeklenebilir', description: 'Esnek çözümler' }
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white/5">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Ekibimiz
            </h2>
            <p className="text-gray-300 text-sm">
              Deneyimli ekibimizle hizmetinizdeyiz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-full bg-white/10 text-white">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {Object.entries(member.social).map(([platform, url], i) => (
                        <a
                          key={i}
                          href={url}
                          className="text-white/70 hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.div whileHover={{ scale: 1.1 }}>
                            {platform === 'twitter' && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                              </svg>
                            )}
                            {platform === 'linkedin' && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            )}
                            {platform === 'github' && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                              </svg>
                            )}
                          </motion.div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 