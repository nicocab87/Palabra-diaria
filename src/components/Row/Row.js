import React, { useEffect, useState } from 'react';
import Square from '../Square/Square';
import wordOfDay from '../../word';

function Row({autoFocus}) {
  const [word, setWord] = useState(['', '', '', '', '']);
  const [wordComplete, setWordComplete] = useState(false);
  const [background, setBackground] = useState([])

  const handleSquare = (index, letter) => {
    const updatedWord = [...word];
    updatedWord[index] = letter;
    setWord(updatedWord);
  };


  useEffect(() => {
    const handleEnterKeyPress = (event) => {(event.key === 'Enter' && wordComplete) && wordCompared(word,wordOfDay)}
    console.log(wordComplete)
    console.log(word);
    (!word.includes(``) && setWordComplete(true));
    window.addEventListener('keydown', handleEnterKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEnterKeyPress);
    }
  }, [word, wordComplete]
  );

  

  const wordCompared = (arr1, arr2)=>{

    arr1.map(letter => {
      const indexOfLetter1 = arr1.indexOf(letter)
      if(arr2.includes(letter)){
        const indexOfLetter2= arr2.indexOf(letter)
        indexOfLetter1 === indexOfLetter2 ? setBackground(`green`) : setBackground(`yellow`)
        console.log(indexOfLetter1, indexOfLetter2)
      }else{
        setBackground(`red`)
      }

    })
}
      

 
  
  return (
    <div className='is-flex'>
        <Square index={0} onLetterChange={handleSquare} background={background} autoFocus={autoFocus}/>
        <Square index={1} onLetterChange={handleSquare} background={background} />
        <Square index={2} onLetterChange={handleSquare} background={background} />
        <Square index={3} onLetterChange={handleSquare} background={background} />
        <Square index={4} onLetterChange={handleSquare} background={background} />
    </div>
  )
}

export default Row