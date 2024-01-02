import React, { useEffect, useState } from 'react';
import Square from '../Square/Square';
import wordOfDay from '../../word';

function Row({autoFocus, disabled}) {
  const [word, setWord] = useState(['', '', '', '', '']);
  const [wordComplete, setWordComplete] = useState(false);
  const [letterMatch, setLetterMatch] = useState([false, false, false, false, false,]);
  const [background, setBackground] = useState(['', '', '', '', '']);

  const handleSquare = (index, letter) => {
    const updatedWord = [...word];
    updatedWord[index] = letter;
    setWord(updatedWord);
  };

  useEffect(() => {
    const handleEnterKeyPress = (event) => {
      if (event.key === 'Enter' && wordComplete) {
        const updatedBackground = wordCompared(word, wordOfDay);
        setBackground(updatedBackground);
      }
    };

    window.addEventListener('keydown', handleEnterKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEnterKeyPress);
    };
  }, [word, wordComplete]);

  const wordCompared = (arr1, arr2) => {
    
   
    return arr1.map((letter, index) => {

      const indexOfLetter2 = arr2.indexOf(letter); 
      const indicesOfFalse = [];  
      

      (letterMatch[index] === false) && indicesOfFalse.push(index);  
      
      if (arr2.includes(letter) && index === indexOfLetter2 && indicesOfFalse.includes(indexOfLetter2)) {
        const updateMatch = [...letterMatch]
        updateMatch[indexOfLetter2]=true
        setLetterMatch(updateMatch)
        console.log(indicesOfFalse)   

        return 'green'

      } else if (arr2.includes(letter) ) {
        return 'yellow'

      }else{
        return 'grey';
      }

    });
  };

  useEffect(() => {
    !word.includes('') && setWordComplete(true);
  }, [word]);
  
  return (
    <div className='is-flex'>
        <Square index={0} onLetterChange={handleSquare} background={background[0]} disabled={disabled} autoFocus={autoFocus}/>
        <Square index={1} onLetterChange={handleSquare} background={background[1]} disabled={disabled} />
        <Square index={2} onLetterChange={handleSquare} background={background[2]} disabled={disabled} />
        <Square index={3} onLetterChange={handleSquare} background={background[3]} disabled={disabled} />
        <Square index={4} onLetterChange={handleSquare} background={background[4]} disabled={disabled} />
    </div>
  )
}

export default Row