import AuthProvider from "../context/AuthProvider";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/nav-components/app.sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { SearchBar } from "@/components/nav-components/searchbar";
import { AlertDialog } from "@/components/ui/alert-dialog";
import StoreProvider from "../StoreProvider";
import { CartDrawer } from "@/components/cartcomponents/cart-drawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body
        className={` antialiased`}
        
      >
        <StoreProvider>
        <ThemeProvider>
        <AlertDialog>
       <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 dark:bg-black rounded-xl w-full mt-4 mb-4">
          <div className="flex items-center  gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            
            <SearchBar/>
            <CartDrawer/>
          </div>
        </header>
        <AuthProvider>
        <div className=" flex flex-1 flex-col gap-4 p-4 pt-0 dark:bg-black rounded-xl w-full">
          {children}
        </div>
        </AuthProvider>
      </SidebarInset>
    </SidebarProvider>
    </AlertDialog>
    </ThemeProvider>
    </StoreProvider>
      </body>
    </html>
  );
}
