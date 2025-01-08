"use client";


import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";


import { useState } from "react";
import { useRouter } from "next/navigation";


export function SearchBar() {

  

  const router = useRouter();
  const [searchInput,setSearchInput] = useState<string | null >(null)
  const placeholders = [
    "Best shoes under 10K?",
    "Nike Adidas Puma? We got it all 😉",
    "Where is Laeddis shoes?",
    "Do these shoes have good arch support?",
    "Are these shoes good for walking/running?",
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(searchInput);
    setSearchInput(e.target.value)
    
    
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    router.push("/searchpage");
  };





  return (
    <>
       <div className="w-full flex justify-center items-center">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={(e)=>onSubmit(e)}
        suggestions={['Nike','Adidas','Puma','Air Jordan 1 mid']}
        />
      
     </div>
    </>
  
  )
}