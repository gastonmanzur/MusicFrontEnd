import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';
import iconoCarrito from '../../../public/img/carrito-de-compras.png';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="nav-link" to="/carrito">
            <img src={iconoCarrito}/>
            <span className="numerito">{` ${cantidadEnCarrito()}`}</span>
        </Link>
    </div>
  )
}

export default CartWidget