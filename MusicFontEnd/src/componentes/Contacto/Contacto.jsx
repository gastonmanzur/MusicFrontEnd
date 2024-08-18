import { useForm } from 'react-hook-form';
import './Contacto.css'



 const Contacto = () => {

const {register, handleSubmit } = useForm();

const enviar = (data) => {
  console.log(data)
}
  
  
  
  return (
    <div>
  <h1 className="main-title">Escribenos tu consulta</h1>
 
  <form onSubmit={handleSubmit(enviar)} className='formulario'/>
   


<form className='formulario'>
<div className="input-group mb-3">
  <span className="input-group-text  btn btn-primary" id="basic-addon1">Nombre</span>
  <input type="text" className="form-control " placeholder="Escriba su nombre aqui" aria-label="Username" aria-describedby="basic-addon1" {...register('nombre')}/>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Ingresa tu email aqui" aria-label="Recipient's username" aria-describedby="basic-addon2" {...register('email')}/>
  <span className="input-group-text  btn btn-primary" id="basic-addon2">@gmail.com.ar</span>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Ingresa tu telefono aqui" aria-label="Recipient's username" aria-describedby="basic-addon2" {...register('telefono')}/>
  <span className="input-group-text  btn btn-primary" id="basic-addon2">Telefono</span>
</div>

<div className="input-group">
  <span className="input-group-text  btn btn-primary">Ingresa tu consulta</span>
  <textarea className="form-control" aria-label="With textarea" {...register('mensaje')}></textarea>
</div>

<button type='submit' className='boton-enviar-form btn btn-primary'>Enviar</button>
</form>
    </div>


  )

}


export default Contacto