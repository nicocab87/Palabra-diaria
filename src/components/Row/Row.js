import React, { useEffect, useState } from 'react';
import Square from '../Square/Square';
import wordOfDay from '../../word';

function Row({autoFocus}) {
  const [word, setWord] = useState(['', '', '', '', '']);
  const [wordComplete, setWordComplete] = useState(false)

  const handleSquare = (index, letter) => {
    const updatedWord = [...word];
    updatedWord[index] = letter;
    setWord(updatedWord);
  };

  useEffect(() => {
    console.log(word);
    (!word.includes(``) && setWordComplete(true));
    window.addEventListener('keydown', handleEnterKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEnterKeyPress);
    }
  }, [word, wordComplete]
  );

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter' && wordComplete) {

      if (arraysAreEqual(word, wordOfDay)) {
        wordCompared()
      } else {
        console.log('Los arrays son diferentes.');
      }
    }
  };

  const wordCompared = (arr1, arr2)=>{
    
  }

  const arraysAreEqual = (arr1, arr2) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  };



  

  
  
  
  return (
    <div className='is-flex'>
        <Square index={0} onLetterChange={handleSquare} autoFocus={autoFocus}/>
        <Square index={1} onLetterChange={handleSquare} />
        <Square index={2} onLetterChange={handleSquare} />
        <Square index={3} onLetterChange={handleSquare} />
        <Square index={4} onLetterChange={handleSquare} />
    </div>
  )
}

export default Row