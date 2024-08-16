import { useContext, useState } from "react";
import { toCapital } from '../../helpers/toCapital';
import ItemCount from "./ItemCount"
import { CartContext } from "../CartContext/CartContext";


const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <div className='card'>
   <img src={item.image} class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">{item.Instrumento}</h5>
    <p class="card-text">Precio ${item.precio}</p>
    <p class="card-text">Categoria: {item.categoria}</p>
    <p class="card-text">descripcion: {item.descripcion}</p>
   <ItemCount cantidad={cantidad} 
   handleRestar={handleRestar}
   handleSumar={handleSumar} 
   handelAgregar={() => {agregarAlCarrito(item, cantidad)}}/> 
   
  </div>
    </div>
  )
}

export default ItemDetail
