'use client';
import { useState, useEffect } from 'react';
import { TextEffect } from '@/components/ui/text-effect';

export function HeroText() {
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const blurSlideVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.03 },
      },
      exit: {
        transition: { staggerChildren: 0.03, staggerDirection: 1 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(10px) brightness(0%)',
        y: 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px) brightness(100%)',
        transition: {
          duration: 0.4,
        },
      },
      exit: {
        opacity: 0,
        y: -30,
        filter: 'blur(10px) brightness(0%)',
        transition: {
          duration: 0.4,
        },
      },
    },
  };

  return (
    <TextEffect
      className="font-bold text-xl md:text-6xl text-center bg-clip-text  bg-gradient-to-b from-neutral-50 to-neutral-400 py-4"
      per='char'
      variants={blurSlideVariants}
      
    >
      "Step into style and conquer every stride 
      — discover shoes that define your fashion, 
                   only here!"
    </TextEffect>
    

  );
}
