"use client"

import * as React from "react"
import { Minus, Plus } from 'lucide-react'

import Product from "../product"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Add } from "@/lib/store/slices/CartSlices"
import { useAppDispatch } from "@/lib/store/hooks"


interface Product {
  id: number;
  name: string;
  price: number;
  image:string;
  quantity:number;
  image2:string;
  image3:string;
  image4:string;
}


const data = [
  {
    goal: 1,
  },
  {
    goal: 2,
  },
  {
    goal: 3,
  },
  {
    goal: 4,
  },
  {
    goal: 5,
  },
  {
    goal: 6,
  },
  {
    goal: 7,
  },
  {
    goal: 8,
  },
  {
    goal: 9,
  },
  {
    goal: 10,
  },
  {
    goal: 11,
  },
  {
    goal: 12,
  },
  {
    goal: 13,
  },
]

export default function CartBtn({ prop }: { prop: Product }) {
  
  const [quant,setQuantity] = React.useState(1);
  const [rand,setRand] = React.useState(Math.floor(100 + Math.random() * 900));
  const productinfo={
    id:rand,
    name:prop.name,
    price:prop.price,
    image:prop.image,
    quantity:quant,
    image2:prop.image2,
    image3:prop.image3,
    image4:prop.image4
  }
  
function createRand(){
  setRand(Math.floor(100 + Math.random() * 900));
}

  const Dispatch = useAppDispatch();
  function handleAddToCart (product: Product) {
    console.log('Adding to cart', product);
    Dispatch(Add(product)); // Dispatch the entire product object
};

  function onClick(adjustment: number) {
   
    setQuantity(Math.max(1, Math.min(12, quant + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Add to Cart</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-1/2 max-w-sm h-1/2">
          
          <DrawerHeader className='mt-20'>
            <img
             src={prop.image}/>
          </DrawerHeader>
           
          <div className="p-4 pb-0">
            
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-1)}
                disabled={quant <= 1}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {quant}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Quantity
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(1)}
                disabled={quant >= 12}
              >
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
          
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
            <Button onClick={()=> {
              createRand();
              handleAddToCart(productinfo)}}>Submit</Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

