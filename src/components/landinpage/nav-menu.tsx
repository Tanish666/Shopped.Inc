"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Shadcn.ui",
    href: "/docs/primitives/alert-dialog",
    description:
      "Shadcn UI is a collection of reusable components that developers can directly integrate into their applications by copying and pasting the code.",
  },
  {
    title: "Aceternity.ui",
    href: "/docs/primitives/hover-card",
    description:
      "Aceternity UI is a modern, customizable, and developer-friendly React component library designed for creating sleek and responsive user interfaces.",
  },
  {
    title: "Animata.ui",
    href: "/docs/primitives/progress",
    description:
      "Animata is a free and open-source collection of handcrafted animations, effects, and interactions built with TailwindCSS and React.js, designed to seamlessly integrate into your projects with simple copy and paste.",
  },
  {
    title: "Magic.ui",
    href: "/docs/primitives/scroll-area",
    description: "Magic UI is a free, open-source UI library offering over 50 animated components built with React, TypeScript, Tailwind CSS, and Framer Motion, designed to help developers create visually appealing and interactive web applications with ease.",
  },

]

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 ">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[url('/Aboutbg.jpg')]  from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Tanish Saxena
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A human who can build Beautifully designed websites built with Next Js.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Hey its Tanish 👋, Current focus is to become a FullStack Web-Dev.
              </ListItem>
              <ListItem href="/docs/installation" title="Qualification">
                12th pass
                Persuing BCA 1-year
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Interests">
                Frontend,Learning Backend,Web Designing...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://www.linkedin.com/in/tanish-saxena-23749a2bb/" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}
            > 
              Linkedin
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
