

const ItemDetail = ({item}) => {

  return (
    <div className='card'>
   <img src={item.image} class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">{item.Instrumento}</h5>
    <p class="card-text">Precio ${item.precio}</p>
    <p class="card-text">Categoria: {item.categoria}</p>
    <p class="card-text">Categoria: {item.descripcion}</p>
    
   
  </div>

  itemdelai
    </div>
  )
}

export default ItemDetail
