"use client"
import React from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
function ToCart() {
  const router = useRouter();
    return (
    <div>
      <Button onClick={()=>router.push('cart-page')}>Cart</Button>
    </div>
  )
}

export default ToCart;
