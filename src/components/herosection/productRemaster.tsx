'use client'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, CreditCard } from 'lucide-react'
import CartBtn from './(cart-components)/cartadd-btn'
import { ProductDrawer } from '../productcomponent/product-drawer'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/lib/store/hooks'
import { replace } from '@/lib/store/slices/PaymentSlices'
interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity:number;
  image2:string;
  image3:string;
  image4:string;
}

export function ProductCard({prop}:{prop:ProductCardProps}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  function handleBuy(){
    dispatch(replace({price:prop.price,productName:prop.name}))
    router.push('/paymentpage');
  }
  const { id, name, price, image, category, quantity } = prop;
  return (
    <Card className="w-full max-w-sm overflow-hidden group">
      <CardContent className="p-0">
      <ProductDrawer  prop={prop} />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-6">
        <div className="w-full">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
            <p className="text-lg font-bold text-primary">₹{price.toFixed(2)}</p>
          </div>
          <div className="w-full h-px bg-gray-200 my-4" />
          <div className="flex gap-2 w-full">
            <Button className="flex-1 gap-2" variant="default" onClick={handleBuy}>
              <CreditCard className="w-4 h-4" />
              Buy Now
            </Button>
           <CartBtn prop={prop}/>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

