import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "./ItemList";
import './Productos.css';
import { useParams } from "react-router-dom";

const Productos = () => {
  
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState('todos los Productos');
  const categoria = useParams().categoria;

  useEffect(() => {
    pedirDatos()
         .then((res) => {
          if(categoria){
            setProductos(res.filter((prod) => prod.categoria === categoria));
            setTitulo(categoria);
          }else{
          setProductos(res);
          setTitulo('todos los Productos')
          }
            
    })
  
  }, [categoria])
  
  
  return (
    <div>
      <ItemList  productos={productos} titulo={titulo}/>
      
    </div>
  )
}

export default Productos
