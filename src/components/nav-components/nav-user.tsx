"use client"
import React from "react"
import { useSession } from "next-auth/react"
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
 
  Sparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Logalert from "./logalert"
import { Button } from "../ui/button";


import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/lib/store/hooks"
import { toggle } from "@/lib/store/slices/PlanSlices"


export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
   const router = useRouter();
  function handleLogin(){
      router.push("/login")
  }
  function getName(name:string){
    if(!name) return "";
    const fullname = name.trim().split(" ");
    const FirstName = fullname[0]?.charAt(0).toUpperCase();
    const Surname = fullname[fullname.length - 1]?.charAt(0).toUpperCase();
    return `${FirstName}${Surname}`;

  }
  
  const dispatch = useAppDispatch();
  const { data: session} = useSession();
  const { isMobile } = useSidebar();
  const userName:string = getName(session?.user?.name as string);
 



if(session){return (    
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar className="h-10 w-10 rounded-lg">
              
              <AvatarFallback className="rounded-full bg-black text-zinc-100">{userName}</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{session.user?.name}</span>
              <span className="truncate text-xs">{session.user?.email}</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          side={isMobile ? "bottom" : "right"}
          align="end"
          sideOffset={4}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={session.user?.image as string} alt={user.name} />
                <AvatarFallback className="rounded-lg">{userName}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{session.user?.name}</span>
                <span className="truncate text-xs">{session.user?.email}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={()=>dispatch(toggle())}>
              <Sparkles />
              Upgrade to Pro
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BadgeCheck />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell />
              Notifications
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />    
            <Logalert/>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
  
)} else{
  return(
    <Button onClick={()=>handleLogin()}>LOGIN</Button>
  )
} 


 
}
