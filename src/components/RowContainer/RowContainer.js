import React from 'react'
import Row from '../Row/Row'

function RowContainer() {

  return (
    <div className='is-flex-direction-column'>
        <div> <Row autoFocus/> </div> 
        <div> <Row/> </div> 
        <div> <Row/> </div> 
        <div> <Row/> </div> 
        <div> <Row/> </div> 
        <div> <Row/> </div> 
    </div>
  )
}

export default RowContainer