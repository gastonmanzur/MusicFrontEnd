
import { Link } from 'react-router-dom'
// import { toCapital } from '../helpers/toCapital'

const Item = ( {producto} ) => {
  return ( 
    <div className="container">
      <div className="card card-item">
  <img src={producto.image} className="card-img-top "/>
  <div className="card-body">
    <h5 className="card-title">{producto.Instrumento}</h5>
    <p className="card-text">Precio ${producto.precio}</p>
    <p className="card-text">Categoria: {producto.categoria}</p>
    <Link className="btn btn-primary" to={`/item/${producto.id}`}>Comprar</Link>
  </div>
</div>
</div>
  )
}

export default Item
