// const ALPHABETS="QWERTYUIOPASDFGHJKLZXCVBNM".split('');  //split is used to make strings in array form
// function LetterButtons( {text,guessedLetters,onLetterClick} ){

//     const originalLetters=new Set(text.toUpperCase().split(''));
//     const guessedLetterSet=new Set(guessedLetters);

//     const buttonStyle=function(Letter){
//         if(guessedLetters.has(Letter)){
//             return `${originalLetters.has(Letter)?'bg-green-500':'bg-red-500'}`;
//         }else{
//             return 'bg-blue-500'
//         }
//     }
//     const buttons=ALPHABETS.map(Letter=>{
//         return (
//             <button key={`button-${Letter}`}
//              onClick={onLetterClick}
//              disabled={guessedLetterSet.has(Letter)}
//              className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(Letter)}`}
//              >
//                 {Letter} 
//             </button>
//         )
//     })
//  return(
//      <>
//      {buttons}
//      </>
//  )
// }
// export default LetterButtons;

const ALPHABETS="QWERTYUIOPASDFGHJKLZXCVBNM".split('');  //split is used to make strings in array form

function LetterButtons({text,guessedLetters,onLetterClick}){
    const originalLetters=new Set(text.toUpperCase().split(''));
    const guessedLetterSet=new Set(guessedLetters);

    const buttonStyle=function(letter){
        if(guessedLettersSet.has(letter)){
            return `${originalLetters.has(letter)?'bg-green-500':'bg-red-500'}`;
        }else{
            return 'bg-blue-500'    
            }
        }

    const buttons=ALPHABETS.map(letter=>{
        return(
            <button
            key={`button-${letter}`}
            onClick={onLetterClick}
            disabled={guessedLetterSet.has(letter)}
            className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
            >
                {letter}
            </button>
        );
    });
    return(
        <>
        {buttons}
        </>
    );
}
export default LetterButtons;