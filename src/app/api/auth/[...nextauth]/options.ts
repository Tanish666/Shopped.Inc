import GoogleProvider from "next-auth/providers/google"
import GithubProvider from  "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"
export const authOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,  
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string, 
        }),
        GithubProvider({
            clientId:process.env.GITHUB_CLIENT_ID as string,
            clientSecret:process.env.GITHUB_CLIENT_SECRET as string,
        })
    ],
    page:{
        signIn:'auth/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
}
