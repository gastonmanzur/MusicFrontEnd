import { useEffect, useState } from "react"
import { perdirItemPorId } from "../../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

const [item, setItem] = useState(null);
const id = useParams().id;

useEffect(() => {
perdirItemPorId(Number(id))
  .then((res) => {
    setItem(res);
  })

}, [])
  return (
    <div>
  { item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer
