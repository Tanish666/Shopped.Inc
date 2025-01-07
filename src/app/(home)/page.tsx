

import Footer from '@/components/landinpage/footer'
import { AppleCardsCarouselDemo } from '@/components/landinpage/showcase'

import { Pointer } from '@/components/ui/cursor'
import { Grid } from '@/components/landinpage/backgroundLines'

import React from 'react'

function page() {
  return (
    <>
   <main className='h-full'>
      <Pointer name="Kaju" className={'relative flex h-fit w-full items-end justify-center'}>
      <Grid/>
      </Pointer>
    </main>
<footer>
<AppleCardsCarouselDemo/>
<Footer/>
</footer>  
</>
)
}

export default page
