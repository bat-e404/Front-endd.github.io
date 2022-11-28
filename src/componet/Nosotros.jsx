import React from 'react'
import Nosotrs from '../assets/Nosotros.jpg'
export default function Nosotros() {
  return (
    <>
    <div class="card text-bg-dark">
        <img src={Nosotrs} class="card-img" alt="..."/>
    <div class="card-img-overlay text-center">
        <h2 class="card-title display-1 mt-3">Nosotros</h2>
        <div className='row justify-content-center'>
            <p class="card-text col-5 mt-5">Hemos creado Vilgia para ti, para que te acompañe en tu camino hacia el estilo musical que mas te llame. La música es el espacio para expresar y hacer sentir lo que sentimos y pasar un buen rato. Notros te ayudaremos a encontrar esa sinergia con un vinilo.</p>
        </div>
    </div>
    </div>
    </>
  )
}
