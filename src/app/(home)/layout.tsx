import AuthProvider from "../context/AuthProvider";
import "../globals.css";
import Image from "next/image";
import StoreProvider from "../StoreProvider";
import { NavBar } from "@/components/landinpage/nav-menu";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en" className="dark">
      <body>
        <div className="flex w-full items-center p-0 justify-center absolute">
        <NavBar/>
        <Image
        className="absolute bg-transparent right-0 top-1 object-cover"
        src="/signature.png"
        alt="signature"
        width={100}
        height={20}
        />
        </div>
        <div className="h-full ">

          <AuthProvider>
          <StoreProvider>{children}</StoreProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
