"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { useRouter } from "next/navigation";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import BlurFade from "../ui/blur-fade";
export function ImagesSliderDemo() {

  const router = useRouter();
  const images = [
    "https://static.nike.com/a/images/f_auto/b0161d8b-c914-47b8-ad04-48c35486f42e/image.jpg",
    "https://images.adsttc.com/media/images/64a4/d985/5921/1819/ebfa/c08c/large_jpg/adidas-asia-pacific-flagship-seoul-various-associates_2.jpg",
    "https://www.reebok.ae/media/mageplaza/store_locator/m/o/moe-rbk.jpeg",
  ];

  function handleShop(){
    router.push('/landingpage')
  }
  return (
    <ImagesSlider className="h-[45rem] " images={images} >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center h-full w-full"
      >
        <BlurFade delay={0.50} inView>
         <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Shopped.In
        </span>
      </BlurFade>
      <BlurFade delay={0.50*2} inView>
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        &quot;Step into style and conquer every stride <br /> — discover shoes that define your fashion, only here!&rdquo;
        </motion.p>
        </BlurFade>
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        > 
        <span onClick={()=>handleShop()}>Shop now</span>
      </HoverBorderGradient>
      </motion.div>
    </ImagesSlider>
  );
}
