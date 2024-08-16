import { useState } from "react";
import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad -1)
    }
    
    const handleSumar = () => {
       cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const handelAgregar = () => {
        console.log({...item, cantidad});
        }

  return (
    <div className='card'>
   <img src={item.image} class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">{item.Instrumento}</h5>
    <p class="card-text">Precio ${item.precio}</p>
    <p class="card-text">Categoria: {item.categoria}</p>
    <p class="card-text">Categoria: {item.descripcion}</p>
   <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handelAgregar={handelAgregar}/> 
   
  </div>
    </div>
  )
}

export default ItemDetail
