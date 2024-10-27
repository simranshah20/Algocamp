import { useState } from "react";

export default function RefactorComponent({ children }){
    const [x,setX]=useState(0);

    return (
        <>
        <button onClick={()=> setX(x+1)}>Increment x</button>
        {children}
        {x}
        </>
    );
}