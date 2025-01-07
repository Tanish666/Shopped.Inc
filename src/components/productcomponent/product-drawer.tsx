'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ShoppingCart, Heart ,ChevronLeft, ChevronRight} from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CartBtn from '../herosection/(cart-components)/cartadd-btn'
interface Product {
    id: number;
    name: string;
    price: number;
    image:string;
    quantity:number;
    category:string;
    image2:string;
    image3:string;
    image4:string;
  }
  



export function ProductDrawer({prop}:{prop:Product}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const productImages = [
    prop.image,
    prop.image2,
    prop.image3,
    prop.image4,
  ]

let productData = prop;

const handlePrevImage = () => {
  setCurrentImageIndex((prevIndex) => 
    prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
  )
}

const handleNextImage = () => {
  setCurrentImageIndex((prevIndex) => 
    (prevIndex + 1) % productImages.length
  )
}
const handleThumbnailClick = (index: number) => {
  setCurrentImageIndex(index)
}
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} >
      <SheetTrigger asChild >
      <div className="relative cursor-pointer ">
      <img src={prop.image} className='cursor-pointer h-[350px] w-[600px] object-cover'/>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
            <div className="absolute top-4 left-4 bg-white bg-opacity-90 text-primary px-2 py-1 text-xs font-semibold rounded-full">
              {prop.category}
            </div>
          </div>
        
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[540px] sm:max-w-full">
        <SheetHeader>
          <SheetTitle>{prop.category}</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
          {/* Product Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{prop.name}</h2>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="text-sm text-gray-500">(150 reviews)</span>
            </div>
            <p className="text-2xl font-semibold">₹{prop.price}</p>
          </div>

          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg max-w-xs mx-auto">
              <img
                src={productImages[currentImageIndex]}
                alt="Main product image"
                
                
              />
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors rounded-full p-2"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="w-8 h-8" />
                <span className="sr-only">Previous image</span>
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors rounded-full p-2"
                onClick={handleNextImage}
              >
                <ChevronRight className="w-8 h-8" />
                <span className="sr-only">Next image</span>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
              {productImages.map((src, index) => (
                <div 
                  key={index} 
                  className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer ${
                    index === currentImageIndex ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={src}
                    alt={`Product thumbnail ${index + 1}`}
                    
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Rest of the product details */}
          <div className="space-y-6">
            <p className="text-gray-600">
              This elegant timepiece combines classic design with modern functionality. 
              Perfect for any occasion, it features a genuine leather strap and a 
              precision quartz movement.
            </p>
            <div className="flex space-x-4">
                
            
            <CartBtn prop = {productData} />
              
              <Button variant="outline" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Product Information Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <p className="text-sm text-gray-600">
                  Our Elegant Timepiece is the perfect accessory for the discerning individual. 
                  Featuring a sleek design and premium materials, this watch is built to last 
                  and designed to impress.
                </p>
              </TabsContent>
              <TabsContent value="specifications" className="mt-4">
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Case Diameter: 40mm</li>
                  <li>Water Resistance: 30m</li>
                  <li>Movement: Quartz</li>
                  <li>Strap: Genuine Leather</li>
                </ul>
              </TabsContent>
              <TabsContent value="shipping" className="mt-4">
                <p className="text-sm text-gray-600">
                  Free shipping on orders over ₹500. Standard shipping takes 3-5 business days. 
                  Express shipping options available at checkout.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

