import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import  Navbar  from './componentes/Navbar/Navbar';
import Productos from './componentes/Navbar/Productos';
import Servicios from './componentes/Servicios/Servicios';
import Contacto from './componentes/Navbar/Contacto';
import  Carousel  from './componentes/Carousel/Carousel';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      {/* <Carousel /> */}
      <Routes>
       <Route path='/' element={<Carousel />} /> 
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Servicios' element={<Servicios />} />
        <Route path='/Contacto' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
