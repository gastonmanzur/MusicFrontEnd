import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

     <div>
     {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.Instrumento}</h3>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }    {
    carrito.map((prod) => {
       <div key={prod.id}>
        <h2>{prod.Instrumento}</h2>
        <p>Precio unitario ${prod.precio}</p>
        <p>Precio total ${prod.pre}</p>
        <p>Cant: {prod.cantidad}</p> 
       </div>
    })
 }
     </div>


        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío :(</h2>
        }
        
    </div>
  )
}

export default Carrito