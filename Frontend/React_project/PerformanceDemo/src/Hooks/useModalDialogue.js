import { useState } from "react";

export default function useModalDialogue(){
    const [isOpen,setIsOpen]=useState(false);
    return{
        isOpen,
        open:()=>setIsOpen(true),
        close:()=>setIsOpen(false),
    };
}