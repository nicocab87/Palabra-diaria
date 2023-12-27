import React, { useState } from 'react'

function Square({index, onLetterChange, focusSquare}) {
  const [letter, setLetter] = useState('')

  const handleChange = (e)=>{
    const newLetter = e.target.value.toUpperCase();
    setLetter(newLetter)
    onLetterChange(index,newLetter)
  }
  
  return (
    <div >
        <input className="input" type="text" maxLength="1" ref={focusSquare}
        value={letter} onChange={handleChange}/>
    </div>
  )
}

export default Square