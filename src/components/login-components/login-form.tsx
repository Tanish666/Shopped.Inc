import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Googlelogin from "./loginbtns/googlelogin"
import Facebooklogin from "./loginbtns/facebooklogin"
import Githublogin from "./loginbtns/githublogin"

export function LoginForm() {
 
 
  return (
    <Card className="mx-auto max-w-sm dark:bg-black">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
           <Githublogin/>
          <Googlelogin/>
          <Facebooklogin/>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
