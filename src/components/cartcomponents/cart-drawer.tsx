'use client'
import { useEffect } from 'react'
import { useState } from 'react'
import { ShoppingBag,X } from 'lucide-react'
import {  Plus, Minus,} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import { Remove, updateQuan } from '@/lib/store/slices/CartSlices'
import { useRouter } from 'next/navigation'
import { replace } from '@/lib/store/slices/PaymentSlices'        
// Define the structure of a cart item
interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image:string
}

export function CartDrawer() {
  // Dummy cart items
  const router = useRouter();
  const ProductData = useAppSelector(state => state.cart);
  
  const dispatch = useAppDispatch();
  const [cartItems, setCartItems] = useState<CartItem[]>([

  ])

useEffect(()=>{
  setCartItems(ProductData);
  console.log(ProductData);
},[ProductData])
    


  // Function to update item quantity
  const updateQuantity = (id: number, change: number) => {
    
    
    // setCartItems(items =>
    //   items.map(item =>
    //     item.id === id
    //       ? { ...item, quantity: Math.max(0, item.quantity + change) }
    //       : item
    //   ).filter(item => item.quantity > 0)
    // );


    cartItems.forEach((item)=>{
           dispatch(updateQuan({id,quantity:Math.max(0, item.quantity + change)}))
    })
  }

  const deleteItem = (id:number)=>{
    dispatch(Remove(id))
    
    
  }
  
  const handleCheckout = () => {
  router.push('/paymentpage');
  dispatch(replace({price:total,
    productName:"Total:-"
  }))
  }

  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative rounded-full">
          <ShoppingBag className="h-5 w-5" />
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-grow">
          <div className="divide-y">
            {cartItems.map(item => (
              <div  key={item.id} 
              className="flex items-center space-x-4 p-6 group">
                <div className="flex-grow">
                  <img src={item.image} alt="" />
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">₹{item.price.toFixed(2)}</p>
                </div>
                
                <div className="flex items-center space-x-2">
             
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <Minus className="h-3 w-3" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <Plus className="h-3 w-3" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full text-muted-foreground transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100"
                    onClick={() => deleteItem(item.id)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="font-bold text-lg">₹{total.toFixed(2)}</span>
          </div>
          <SheetClose asChild>
            <Button className="w-full" onClick={handleCheckout}>Checkout</Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

