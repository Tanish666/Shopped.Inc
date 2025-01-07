'use client'
import React from 'react'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
function Facebooklogin() {
    return (
       <Button variant="outline" className="flex items-center bg-blue-700  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-white dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"  onClick={(e)=>{
           e.preventDefault();
           signIn("Facebook",{callbackUrl:"/landingpage"})}}>
        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
  </svg>
      <span>Continue with Facebook</span>
     </Button>
  )
}

export default  Facebooklogin