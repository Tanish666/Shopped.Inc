'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface OfferItem {
  id: number
  imageUrl: string
  alt: string
}

const offerItems: OfferItem[] = [
  { id: 1, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/63b0a657792295.59e4652eb2e41.jpg', alt: 'Special Offer 1' },
  { id: 2, imageUrl: 'https://www.skydda.com/wcsstore//CAS/Skydda/Attachment/News/SE/2024/SS24_Reebok_top_5_news_fullimage.jpg', alt: 'Special Offer 2' },
  { id: 3, imageUrl: 'https://i.pinimg.com/1200x/f3/29/ab/f329ab9228a94f2043586f18a807539d.jpg', alt: 'Special Offer 3' },
]

export default function AnimatedHeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offerItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[300px] lg:h-[425px] md:h-[250px] sm:h-[250px] overflow-hidden rounded-lg">
      <AnimatePresence initial={false}>
        <motion.div
          key={offerItems[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <img
            src={offerItems[currentIndex].imageUrl}
            alt={offerItems[currentIndex].alt}
           
            className=" inset-0 w-full h-full rounded-lg"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {offerItems.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

