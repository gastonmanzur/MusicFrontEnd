import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom';
import ItemCountCarrito from './ItemCountCarrito';
import ItemCount from '../Productos/ItemCount';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

     <div className='card'> 
     {
            carrito.map((prod) => ( 
                <div key={prod.id}>
                    <br />
                    <div className='item-carrito image-detail-carrito'>
                        <div>
                 <h3 className='titulo'>{prod.Instrumento}</h3>
                    <p className='precio'>Precio unit: ${prod.precio}</p>
                    <p className='precio-total'>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p className='cantidad'>Cant: {prod.cantidad}</p>
                    </div>
                    <img src={prod.image} alt={prod.Instrumento} />
                    </div>
                    <br />
                </div>
            ))
        }    
  
 
     </div>


        {  
            carrito.length > 0 ?
            <>
                <h2 className='precio-final'>Precio total: ${precioTotal()}</h2>
                <button className='btn btn-primary fin-compra' onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout" className='btn btn-primary fin-compra'>Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío :(</h2>
        }
        
    </div>
  )
}

export default Carrito