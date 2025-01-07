import React from 'react'
import Product from './product'
import { ProductCard } from './productRemaster'
import { useAppSelector } from '@/lib/store/hooks'

interface product{
    id:number,
    name:string,
    price:number,
    image:string,
    image2:string,
    image3:string,
    image4:string,
    category:string 
    quantity:number,
    
}

function SearchedProduct({prop}:{prop:product}) {
  const SearchProduct = useAppSelector(state => state.search)
   
  return (
    <>
    <h1>Results for "{SearchProduct}"</h1>
    <ProductCard prop={prop}/>
    </>
   )
}

export default SearchedProduct