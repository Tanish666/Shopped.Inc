import AuthProvider from "../context/AuthProvider";
import "../globals.css";
import StoreProvider from "../StoreProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en" >
      <body>
        <div className=" flex flex-1 flex-col gap-4 p-4 pt-0 dark:bg-black rounded-xl">
          <AuthProvider>
          <StoreProvider>{children}</StoreProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
