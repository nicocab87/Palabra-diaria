import React, { useState } from 'react'
import Row from '../Row/Row'

function RowContainer() {
  const [disabled, setDisabled] = useState([false, false, true, true, true, true]);

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div className='is-flex-direction-column'>
        <form onSubmit={handleSubmit} > <Row disabled={disabled[0]} autoFocus/> </form> 
        <form onSubmit={handleSubmit} > <Row disabled={disabled[1]}/> </form> 
        <form onSubmit={handleSubmit} > <Row disabled={disabled[2]}/> </form> 
        <form onSubmit={handleSubmit} > <Row disabled={disabled[3]}/> </form> 
        <form onSubmit={handleSubmit} > <Row disabled={disabled[4]}/> </form> 
        <form onSubmit={handleSubmit} > <Row disabled={disabled[5]}/> </form> 
    </div>
  )
}

export default RowContainer