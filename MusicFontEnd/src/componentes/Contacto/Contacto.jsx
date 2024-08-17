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
<div class="input-group mb-3">
  <span class="input-group-text  btn btn-primary" id="basic-addon1">Nombre</span>
  <input type="text" class="form-control " placeholder="Escriba su nombre aqui" aria-label="Username" aria-describedby="basic-addon1" {...register('nombre')}/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Ingresa tu email aqui" aria-label="Recipient's username" aria-describedby="basic-addon2" {...register('email')}/>
  <span class="input-group-text  btn btn-primary" id="basic-addon2">@gmail.com.ar</span>
</div>

<div className="input-group mb-3">
  <input type="text" class="form-control" placeholder="Ingresa tu telefono aqui" aria-label="Recipient's username" aria-describedby="basic-addon2" {...register('telefono')}/>
  <span class="input-group-text  btn btn-primary" id="basic-addon2">Telefono</span>
</div>

<div class="input-group">
  <span class="input-group-text  btn btn-primary">Ingresa tu consulta</span>
  <textarea class="form-control" aria-label="With textarea" {...register('mensaje')}></textarea>
</div>

<button type='submit' className='boton-enviar-form btn btn-primary'>Enviar</button>
</form>
    </div>


  )

}


export default Contacto