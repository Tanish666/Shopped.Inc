"use client";
import { useRef } from "react";
import { Card } from "../ui/card";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { searchThis } from "@/lib/store/slices/SearchSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IconMathFunctionY } from "@tabler/icons-react";

export function SearchBar() {
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const suggestion = ['Nike','Air Jordan 1 mid','Adidas']
  const searched = useAppSelector(state => state.search);
  const [showSuggestions, setShowSuggestions] = useState(false)
  const router = useRouter();
  const [searchInput,setSearchInput] = useState<string | null >(null)
  const placeholders = [
    "Best shoes under 10K?",
    "Nike Adidas Puma? We got it all 😉",
    "Where is Laeddis shoes?",
    "Do these shoes have good arch support?",
    "Are these shoes good for walking/running?",
  ];
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(searchInput);
    setSearchInput(e.target.value)
    if(searchInput){
      if(searchInput.length > 2) setShowSuggestions(true)
    }else{
     setShowSuggestions(false)
    }
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    router.push("/searchpage");
  };



  useEffect(()=>{
    if(searchInput){
      if(searchInput.length > 2){
        const normalizedSearch = searchInput.toLowerCase().replace(/\s+/g,"");
        suggestion.forEach(item =>{
          if(item.toLowerCase().replace(/\s+/g,"").startsWith(normalizedSearch,0)){
            setFilteredSuggestions(state => [...state,item]);
          }
        })
      }
    }
  },[searchInput]);

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