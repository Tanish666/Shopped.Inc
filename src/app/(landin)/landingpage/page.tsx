'use client'

import { MovingCards } from "@/components/herosection/MovingCards";
import { ProductCard } from "@/components/herosection/productRemaster";
import { InView } from "@/components/ui/in-view";
import BlurFade from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { WobbleCardDemo } from "@/components/herosection/WobbleCard";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
 } from "@/components/ui/pagination";
import { useSession } from "next-auth/react";
import DelayedLoginAlert from "@/components/login-components/loginAlert";
import Pricing from "@/components/ui/pricing";
import { useAppSelector } from "@/lib/store/hooks";
import SearchedProduct from "@/components/herosection/SearchedProduct";
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  category: string;
  quantity: number;
};



export default function Home() {
  const [timer,setTimer] = useState(true);
  const inputRef = useRef(null);


  const sampleProducts = [

    {
      id: 5,
      name: 'Air Jordan 1 Mid',
      price:  10795,
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/24750e81-85ed-4b0e-8cd8-becf0cd97b2f/WMNS+AIR+JORDAN+1+MID.png',
      image2:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/858bae62-65db-4f83-a870-9da6f3d92624/WMNS+AIR+JORDAN+1+MID.png',
      image3:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/36fc9b85-c228-4cb3-a405-2b16a4c85ba0/WMNS+AIR+JORDAN+1+MID.png',
      image4:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/994eb8da-59c2-491f-b1ac-6560fe7a0f3d/WMNS+AIR+JORDAN+1+MID.png',
      category: 'Nike',
      quantity:1,
    },
    {
      id: 1,
      name: 'Air Jordan 1 Elevate Low',
      price: 11895,
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c1e356c1-1581-4f2e-a1b2-5274ef23a1ba/WMNS+AIR+JORDAN+1+ELEVATE+LOW.png',
      image2:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/16d027b9-1d49-4b96-a235-2da7b95785fc/WMNS+AIR+JORDAN+1+ELEVATE+LOW.png',
      image3:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/643d94e1-fd6c-46cd-acd7-fa4332c10004/WMNS+AIR+JORDAN+1+ELEVATE+LOW.png',
      image4:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/75c47acb-448b-4ebd-9164-0db5bafdcdcf/WMNS+AIR+JORDAN+1+ELEVATE+LOW.png',
      category: 'Nike',
      quantity:1,
    },

    {
      id: 3,
      name: 'Air Jordan 1 Mid',
      price: 11495,
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7dd4ccf5-1588-47de-b000-c1f1db655a74/WMNS+AIR+JORDAN+1+MID.png',
      image2:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/effe45bc-5292-4faf-9706-a8973ecc2ed1/WMNS+AIR+JORDAN+1+MID.png',
      image3:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c687c6e1-c70d-4681-930e-f9fb3b891b66/WMNS+AIR+JORDAN+1+MID.png',
      image4:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ea728572-15b5-4272-85b0-e1b24f042ac7/WMNS+AIR+JORDAN+1+MID.png',
      category: 'Nike',
      quantity:1,
    },
    {
      id: 11,
      name: 'Air Jordan 1 Mid',
      price: 11495,
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/288a2235-54ce-4f8e-a133-0117cbc381b4/AIR+JORDAN+1+MID.png',
      image2:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a7d138bb-f05b-4708-9f1f-ccf5a6d180d2/AIR+JORDAN+1+MID.png',
      image3:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/852a384c-a6ef-45af-9bf7-2ed47d64ae4f/AIR+JORDAN+1+MID.png',
      image4:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ce623fbc-daeb-47ea-ae70-1ffa4847c569/AIR+JORDAN+1+MID.png',
      category: 'Nike',
      quantity:1,
    },
    {
      id: 4,
      name: 'Air Cleat 1',
      price: 7565,
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5477ee47-0f7b-4ce8-ad2b-82c27aa313fb/ZM+SUPERFLY+10+ELITE+FG.png',
      image2:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/4d68aa28-275c-468c-9a7c-3317ff1e6021/ZM+SUPERFLY+10+ELITE+FG.png',
      image3:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f13823d9-8180-4a8e-9023-fbf4fdcd6e62/ZM+SUPERFLY+10+ELITE+FG.png',
      image4:'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9c1c7a97-74ac-45c4-a32a-3bf76fdc62a3/ZM+SUPERFLY+10+ELITE+FG.png',
      category: 'Nike',
      quantity:1,
    },
    {
      id: 2,
      name: 'Adidas Shoes',
      price: 5500,
      image: 'https://m.media-amazon.com/images/I/51TJzQwykoL._SY675_.jpg',
      image2:'https://m.media-amazon.com/images/I/51bVHzV0NOL._SY675_.jpg',
      image3:'https://m.media-amazon.com/images/I/51-0d9WDK9L._SY500_.jpg',
      image4:'https://m.media-amazon.com/images/I/51CXySqjy0L._SY500_.jpg',
      category: 'Adidas',
      quantity:1,
    },
    {
      id: 6,
      name: 'adidas Mens Ent-Smart M Running Shoes',
      price: 1999,
      image: 'https://m.media-amazon.com/images/I/61lDDEAHirL._SY500_.jpg',
      image2:'https://m.media-amazon.com/images/I/61rqzKQLw2L._SY500_.jpg',
      image3:'https://m.media-amazon.com/images/I/61pz50G9IGL._SY500_.jpg',
      image4:'https://m.media-amazon.com/images/I/61buMxhjyNL._SY500_.jpg',
      category: 'Adidas',
      quantity:1,
    },
    {
      id: 7,
      name: 'adidas Mens Heawyn Running Shoes',
      price: 2999,
      image: 'https://m.media-amazon.com/images/I/71Ux+1L3UeL._SY575_.jpg',
      image2:'https://m.media-amazon.com/images/I/71eY3RhAtXL._SY500_.jpg',
      image3:'https://m.media-amazon.com/images/I/71EqqSysQ+L._SY500_.jpg',
      image4:'https://m.media-amazon.com/images/I/615mBt7jMmL._SY500_.jpg',
      category: 'Adidas',
      quantity:1,
    },
    {
      id: 8,
      name: 'PUMA Quest X Men Running Shoes',
      price: 3179,
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/394371/01/sv01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers',
      image2:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/394371/01/mod01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers',
      image3:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/394371/01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers',
      image4:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/394371/01/bv/fnd/IND/fmt/png/Smashic-Unisex-Sneakers',
      category: 'Puma',
      quantity:1,
    },
    {
      id: 9,
      name: 'PUMA Swift Pulse Men Training Shoes',
      price: 3359,
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/306864/01/sv01/fnd/IND/fmt/png/Ferrari-Drift-Cat-Delta-Unisex-Sneakers',
      image2:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/306864/01/fnd/IND/fmt/png/Ferrari-Drift-Cat-Delta-Unisex-Sneakers',
      image3:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/306864/01/bv/fnd/IND/fmt/png/Ferrari-Drift-Cat-Delta-Unisex-Sneakers',
      image4:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/306864/01/sv02/fnd/IND/fmt/png/Ferrari-Drift-Cat-Delta-Unisex-Sneakers',
      category: 'Puma',
      quantity:1,
    },
    {
      id: 10,
      name: 'PUMA Swift Pulse Men Training Shoes',
      price: 4559,
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/306864/03/sv01/fnd/IND/fmt/png/Ferrari-Drift-Cat-Delta-Unisex-Sneakers',
      image2:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/306864/03/fnd/IND/fmt/png/Ferrari-Drift-Cat-Delta-Unisex-Sneakers',
      image3:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/306864/03/bv/fnd/IND/fmt/png/Ferrari-Drift-Cat-Delta-Unisex-Sneakers',
      image4:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/306864/03/sv03/fnd/IND/fmt/png/Ferrari-Drift-Cat-Delta-Unisex-Sneakers',
      category: 'Puma',
      quantity:1,
    },
  ]
     
  const { data: session, status } = useSession();
  
  useEffect(()=>{
    const timer= setTimeout(()=>{
      setTimer(false)
    },3000)

    return () => clearTimeout(timer);
  },[])
  


  {
    if(timer){
      return(
        <div className="flex flex-col space-y-3  items-center justify-center">
        <Skeleton className="h-[200px] w-[380px] ]  rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[380px]" />
          <Skeleton className="h-4 w-[330px]" />
        </div>

        <Skeleton className="h-[200px] w-[380px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[380px]" />
          <Skeleton className="h-4 w-[330px]" />
        </div>
      </div>
      )
    }else
    {
     
       if(!session){      
        return (
          <> 
        <BlurFade delay={0.50} inView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
             <WobbleCardDemo/>
             </InView>
            
            <main className="min-h-screen  px-4  lg:px-8 flex items-center">
             
              <div className="max-w-7xl mx-auto mt-8">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">Products</h1>
                <Separator className="mb-6" />
                <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >    
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-6">
                  {sampleProducts.map(product => (
                    <div ref={inputRef} key={product.id} className="w-full">
                      <ProductCard prop={product} />
                    </div>
                  ))}
                </div>
                
                </InView>
                
              </div>
              <DelayedLoginAlert/>
            </main>
            <footer>
            <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
        </Pagination>
            </footer>
            </BlurFade> 
          </>
        ) }else{
        return (
          <>
        <BlurFade delay={0.50} inView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
             <WobbleCardDemo/>
           
             </InView>
            <main className="min-h-screen  px-4  lg:px-8 flex items-center">
                
              <div className="max-w-7xl mx-auto mt-8">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">Products</h1>
                <Separator className="mb-6" />
                <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >    
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-6">
                  {sampleProducts.map(product => (
                    <div key={product.id} className="w-full">
                      <ProductCard prop={product} />
                    </div>
                  ))}
                </div>
                </InView>
              </div>
              <Pricing
               outerRadius="rounded"
              padding="medium"
              plans={[
              {
              monthlyPrice: '₹0.00',
              name: 'Free',
              yearlyPrice: '₹0.00'
              },
              {
              monthlyPrice: '₹199',
              name: 'Starter',
              popular: true,
              yearlyPrice: '₹999'
              },
              {
              monthlyPrice: '₹399',
              name: 'Pro',
              yearlyPrice: '₹1999'
              }
              ]}
             width="md"
             />
            </main>
            <footer>
            <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
            </footer>
            </BlurFade>
             </>
             ) 
            }
     

    }
  }
     

}
