'use client'

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  
  CardFooter,
  CardHeader,
  
} from "@/components/ui/card"
import CartBtn from "./(cart-components)/cartadd-btn"
import { ProductDrawer } from "../productcomponent/product-drawer"

export default function Product() {

   const product = {
    id:Math.floor(100 + Math.random() * 900) ,
    name:'reebok shoes',
    price:500,
    image:'https://m.media-amazon.com/images/I/51Inwb0gwLL._SY675_.jpg',
    quantity:1
   }

  return (
    <Card className="w-[350px]">
      <CardHeader>
       
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
           <button className="p-0 bg-transparent border-none cursor-pointer"  >
         
           <img src='https://m.media-amazon.com/images/I/51Inwb0gwLL._SY675_.jpg' alt="product-img"/> 
          
           </button>
           <ProductDrawer prop={product} />
        <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      
    </div>
        ₹0.00
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CartBtn prop = {product} />
        <Button>Buy</Button>
      </CardFooter>
    </Card>
  )
}

