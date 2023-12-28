import React, { useEffect, useRef, useState} from 'react';

function Square({index, onLetterChange, autoFocus}) {
  const [letter, setLetter] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const inputRef = useRef();

  useEffect(()=>{
    if(autoFocus && inputRef.current){
      inputRef.current.focus();
    }
  },[autoFocus]);
  
  const handleChange = (e)=>{
    const newLetter = e.target.value.toUpperCase();
    setLetter(newLetter);
    onLetterChange(index,newLetter);
    setPrevValue(newLetter);
  }

  const handleKeyDown = (e)=>{
    if(e.key.length === 1 && e.key.match(/[a-zA-Z]/)){
      const nextIndex = Math.min(index + 1, 4);
      document.getElementById('square-'+nextIndex)?.focus();
      

    }else if(e.key === 'Backspace' && prevValue === ''){
      const prevIndex = Math.max(index - 1, 0);
      document.getElementById('square-'+prevIndex)?.focus();

    }else if(e.key === 'Backspace' && prevValue !== ''){
      onLetterChange(index, '')
    }
  }
  
  
  return (
    <div >
        <input 
        id={`square-${index}`}
        className="input" 
        type="text" 
        maxLength="1" 
        ref={inputRef}
        autoFocus={autoFocus}
        value={letter} 
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        />
        
    </div>
  )
}

export default Square