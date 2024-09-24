import { getMaskedString } from "./MaskingUtility";

function Maskedtext({text,guessedLetters}){
    const maskedString=getMaskedString(text,guessedLetters);
    return(
        <>
         {maskedString.map((Letter,index)=>{
            return(
                // mx in tailwindcss mean margin on x-axis
                <span key={index} className="mx-1"> 
                  {Letter}
                </span>
            )
         })}
        </>
    )
}
export default Maskedtext;