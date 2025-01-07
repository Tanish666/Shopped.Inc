"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";



export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7x1 mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-radiant-white-brick-wall-texture-a-dynamic-wallpaper-in-3d-image_3799560.jpg')] bg-cover  min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
            Wanting it from very long time? 
          </h2>
          <p className="mt-4 text-left  text-base/6 text-black">
            Bring your dream pair with our exlusive time limited shoes by big brands
            which you should never miss..
          </p>
        </div>
        <Image
          src="/nikeShoe.png"
          width={490}
          height={490}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[2%] lg:-bottom-20
           filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[url('https://as2.ftcdn.net/v2/jpg/08/94/26/95/1000_F_894269572_yCjE66bjlKVwTfYSAKLB7jHg7DWvVqZ5.jpg')] bg-cover ">
        <h2 className="max-w-80 lg:h-60 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No first copy 😊.
        </h2>
        <Image
          src="/cleat2.png"
          width={350}
          height={350}
          alt="linear demo image"
          className="absolute right-5 lg:right-[3%] lg:bottom-2 -bottom-10  object-fit rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[url('https://cdn.pixabay.com/photo/2016/12/18/21/23/brick-wall-1916752_640.jpg')] bg-cover min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm relative bottom-5">
          <h2 className="max-w-sm md:max-w-lg z-50 text-left font-bold text-balance text-base md:text-3xl lg:text-3xl  tracking-[-0.015em] text-white focus:outline-none">
            Most trandy pairs on the market!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left z-50 text-base/6  text-black focus:outline-none">
            With over 100,000 customer , Shopped is the most
            popular shoes platform for sneakerheads.
          </p>
        </div>
        <Image
          src="/nike2Shoe.png"
          width={500}
          height={400}
          alt="linear demo image"
          className="absolute -right-10 sm:bottom-auto sm:right-50 sm:left-autos md:-right-[40%] lg:right-[5%] lg:-bottom-40 -bottom-10 object-contain bg-cover rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
