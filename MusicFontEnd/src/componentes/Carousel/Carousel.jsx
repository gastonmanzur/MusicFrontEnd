
import React from 'react'
import '../../App.css'
function Carousel() {
    return (
<div>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/foto1.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <div className="fondo-texto-carrusel">
        <h1>Dale nueva vida a tu música con nuestros servicios de reparación.</h1>
        <h5>Somos especialistas</h5>
        <p>Contamos con talleres especialmente equipados para garantizar el mejor trabajo en todo tipo de instrumentos.</p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./img/foto3.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div className="fondo-texto-carrusel">
        <h1>Afinación profesional para que tu música brille.</h1>
        <h5>mejor sonido, mayor duración del instrumento, mejor experiencia al tocar</h5>
        <p>Afinamos todo tipo de instrumentos de cuerda, viento y teclado.</p>
        </div>
       </div>
    </div>
    <div class="carousel-item">
      <img src="./img/foto2.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div className="fondo-texto-carrusel">
        <h1>¿Siempre has querido aprender a tocar tu instrumento favorito?</h1>
        <h5>¡Tenemos el curso perfecto para ti!</h5>
        <p>Descubre el músico que llevas dentro con nuestros cursos</p>
        </div>
       </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}

export default Carousel;

