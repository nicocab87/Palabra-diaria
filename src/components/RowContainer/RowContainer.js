import React from 'react'
import Row from '../Row/Row'

function RowContainer() {

  return (
    <div className='is-flex-direction-column'>
        <Row autoFocus/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
    </div>
  )
}

export default RowContainer