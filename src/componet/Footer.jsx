import React from 'react'
import logoInvertido from '../assets/logoInvertido.png'

export default function Footer() {
  return (

    <footer className='bg-dark fixed-bottom '>
      <div className='container'>
        <div className='row justify-conten-center'>

           <div className='col-1 d-none d-sm-block p-1'>
           <img src={logoInvertido} alt="" width="115" />

           </div>
            <div className='col-11 text-center text-white pt-3'>
              <p>© 2022 <a href="https://github.com/bat-e404" id="bat-e404" target="__blank">bat-e404</a> Todos los derechos reservados</p>
            </div>
        </div>
      </div>
    </footer>
    
  )
}
