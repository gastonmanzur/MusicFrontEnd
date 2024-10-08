
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import  Navbar  from './componentes/Navbar/Navbar';
import Productos from './componentes/Productos/Productos';
import Servicios from './componentes/Servicios/Servicios';
import Contacto from './componentes/Contacto/Contacto';
import  Carousel  from './componentes/Carousel/Carousel';
import ItemDetailContainer from './componentes/Productos/ItemDetailContainer';
import ItemDetail from './componentes/Productos/ItemDetail';
import Carrito from './componentes/CartContext/Carrito';
import  {CartProvider}  from './componentes/CartContext/CartContext';
import Checkout from './componentes/CartContext/Checkout';
import Contenido from './componentes/Contenido/Contenido';
// import Footer from './componentes/Footer/Footer';


function App() {

  // const [count, setCount] = useState(0)
 
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path='/' element={<Carousel />} />
       <Route path='/Contenido' element={<Contenido />} /> 
        <Route path='/Productos/:categoria' element={<Productos />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Servicios' element={<Servicios />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/ItemDetail' element={<ItemDetail />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/Checkout' element={<Checkout />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
