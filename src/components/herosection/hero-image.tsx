import React from 'react'
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

function HeroImg() {
  return (
    <div className="w-[450px]">
    <AspectRatio ratio={16 / 9}>
      <Image src="..." alt="Image" className="rounded-md object-cover" />
    </AspectRatio>
  </div>
  
  )
}

export default HeroImg
