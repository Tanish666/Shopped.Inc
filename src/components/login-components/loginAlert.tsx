'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { X } from 'lucide-react'

export default function DelayedLoginAlert() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000) // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleRedirect = () => {
    router.push('/login') // Redirect to the login page
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen} >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Wanna Login SneakerHead?</AlertDialogTitle>
          <AlertDialogDescription>
            You can log in to access for ordering, but it's not required to continue browsing 😉.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-between">
          <Button variant="outline" size="icon" onClick={() => setIsOpen(false)} className="absolute right-4 top-4">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <AlertDialogAction asChild>
            <Button onClick={handleRedirect}>Go to Login</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
