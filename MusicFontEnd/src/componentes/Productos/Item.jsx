
import { Link } from 'react-router-dom'
// import { toCapital } from '../helpers/toCapital'

const Item = ( {producto} ) => {
  return ( 
    <div className="container">
      <div className="card card-item">
  <img src={producto.image} class="card-img-top "/>
  <div class="card-body">
    <h5 class="card-title">{producto.Instrumento}</h5>
    <p class="card-text">Precio ${producto.precio}</p>
    <p class="card-text">Categoria: {producto.categoria}</p>
    <Link className="btn btn-primary" to={`/item/${producto.id}`}>Comprar</Link>
  </div>
</div>
</div>
  )
}

export default Item
