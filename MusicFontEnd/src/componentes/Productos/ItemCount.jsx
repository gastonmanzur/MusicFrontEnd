import React, { useState } from 'react'

const ItemCount = ({cantidad, handleRestar, handleSumar, handelAgregar}) => {



    return (
    <div>
      <div className="item-count">
        <button onClick={handleRestar} className='btn btn-primary'>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar} className='btn btn-primary'>+</button>
      </div>
      <button className='agregar-al-carrito btn btn-primary' onClick={handelAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
