'use client'
import { GridBeam } from "../ui/background-lines"
import { TextEffect } from "../ui/text-effect"
import { MorphingText } from "../ui/MorphingText"
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"
import { HoverBorderGradient } from "../ui/hover-border-gradient"
import { useRouter } from "next/navigation"
import { Iphone15ProDemo } from "./iphoneMockup"
export const Grid = () => {
const router = useRouter();
const texts = [
  "Stylish",
  "Trendy",
  "Elegant",
  "Cushiony",
  "Ergonomic",
  "Chic",
  "Unique",
];

const handleShop = ()=>{
  router.push('/landingpage');
}

return(
  <div className="w-full h-full dark:bg-grid-white/[0.05] bg-grid-black/[0.07]">
    <GridBeam className="sm:pl-16 pt-28 pl-4 flex items-start justify-start gap-5 grid-flow-col">
      <div className="grid gap-2">
        <h1 className="sm:text-5xl text-4xl font-bold max-w-sm">Shop That Converts.</h1>
        <p className="text-neutral-500 max-w-lg">
          Money into Beautiful Shoes which I btw Purchesed from Rich Brands 😎.
        </p>
      </div>
    
    <div className="flex justify-end  mt-5 ">
    <AnimatedCursor text="Badaam💙" />
     <img src="/WebScreenshot.png" alt="" className="rounded-tl-2xl rounded-bl-2xl shadow-[0_0_20px_10px_rgba(173,216,230,0.7)] "/>
      </div>
      </GridBeam>
    <div className="flex justify-center mt-[200px]  lg:text-3xl">
      <TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3} >
      Shop Your Fav Brands Shoes Which are more..
    </TextEffect>
    </div>
    <div className="mt-5">
    <MorphingText texts={texts} />
    </div>
    <div className="flex justify-center mb-[150px] mt-7">
     <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
      > 
            <span onClick={handleShop}>Shop now</span>
    </HoverBorderGradient>
          </div>
          <Iphone15ProDemo/>
         </div>
  )
}

const AnimatedCursor: React.FC<{ className?: string; text: string }> = ({ className, text }) => (
  
  
  
  <motion.div
    initial={{ translateX: '0', translateY: '0' }}
    animate={{ translateX: ['0', '20px', '0'], translateY: ['0', '40px', '0'] }}
    transition={{ duration: 4, repeat: Infinity, bounce: true }}
    className={'relative z-[2] flex items-center gap-4'}>
    <div
      className={cn(
        'w-fit rounded-full border border-red-500 bg-red-500 px-2 py-1 text-white',
        className
      )}>
      {text}
    </div>
    <svg className="w-8 h-10 fill-red-500 " fill="none" height="" viewBox="0 0 17 18" width="17">
      <path
        d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
        
        strokeWidth="1"
      />
    </svg>
  </motion.div>
)