import React, { useEffect, useState } from 'react'
import Square from '../Square/Square'

function Row({autoFocus}) {
  const [word, setWord] = useState(['', '', '', '', '']);

  const handleSquare = (index, letter) => {
    const updatedWord = [...word];
    updatedWord[index] = letter;
    setWord(updatedWord);
  };

  useEffect(() => {
    console.log(word);
  }, [word]);
  
  return (
    <div className='is-flex'>
        <Square index={0} onLetterChange={handleSquare} autoFocus={autoFocus}/>
        <Square index={1} onLetterChange={handleSquare}/>
        <Square index={2} onLetterChange={handleSquare}/>
        <Square index={3} onLetterChange={handleSquare}/>
        <Square index={4} onLetterChange={handleSquare}/>
    </div>
  )
}

export default Row