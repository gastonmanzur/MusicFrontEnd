import { useForm } from 'react-hook-form';
import './Contacto.css'


 const Contacto = () => {

const {register, handleSubmit } = useForm();

const enviar = (data) => {
  console.log(data)
}
  
  
  
  return (
    <div>
  <h1 className="main-title">Contacto</h1>
 
  <form onSubmit={handleSubmit(enviar)} className='formulario'>
   

    <input type="text" placeholder='Ingesa tu nombre' {...register('nombre')}/>
    
    <input type="mail" placeholder='Ingresa tu e-mail' {...register('email')}/>

    <input type="phone" placeholder='Ingresa tu telefono' {...register('telefono')}/>
    
    <button type='submit' className='enviar'>Enviar</button>
  </form>
    </div>


  )

}


export default Contacto