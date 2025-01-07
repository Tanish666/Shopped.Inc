"use client"
import { useAppSelector, useAppStore } from '@/lib/store/hooks'
import React from 'react'
import { useState,useEffect } from 'react';
import BlurFade from '@/components/ui/blur-fade';
import { ProductCard } from '@/components/herosection/productRemaster';
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

function page() {
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
    const [searchProt,setSearchPro] = useState<Product[]>([]);
    const searchProduct = useAppSelector(state => state.search);
    useEffect(()=>{
        const normalizedSearch = searchProduct.toLowerCase().replace(/\s+/g, "");
        const filteredProducts = sampleProducts.filter((item)=> 
         item.name.toLowerCase().replace(/\s+/g, "") == normalizedSearch ||
         item.category.toLowerCase().replace(/\s+/g, "") == normalizedSearch
       );
        if(filteredProducts.length > 0){
         setSearchPro(filteredProducts);//best approch
         
        }
        
        },[searchProduct])
    

    if(searchProt.length > 0){
        return(
            <>
             <h1>Searched for "{searchProduct}"</h1>
                   <BlurFade delay={0.25} inView>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-6 ">
                   {searchProt.map(product => (
                   <div key={product.id} className="w-full flex items-center justify-center">
                   <ProductCard prop={product} />
                   </div>
                   ))}
                   </div>
                   </BlurFade>            
            </>
        )
    }else{
        return(
            <h1>no results found for "{searchProduct}"</h1>
        )
    }       
  
}

export default page