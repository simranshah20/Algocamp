/** 
 * @param {The word which is given as input and is expected to be guessed} originalWords 
 * @param {Letters which are guessed by the user alraedy} guessedLetters 
 * example:
 * originalWord:Mango
 * guessedLatters:['M','N','O']
 * return->"M_N_O"
 * **/
export function getMaskedString(originalWords,guessedLetters){
guessedLetters=guessedLetters.map(Letter=>Letter.toUpperCase());//converts all the guessedLetters to Uppercase

const  guessedLetterSet=new Set(guessedLetters);  //sets of guessedLetters by using Set to make searching fast

//split(),splits string into array form
const result = originalWords.toUpperCase().split('').map(char => {
    if (guessedLetterSet.has(char)) {
      return char;
    } else {
      return "_";
    }
  })   //['M','_','N','_','O']
  return result.join('');  //it joins array into string "M_N_O"
}


