import React from 'react'
import ImgBanner1 from '../assets/br-1.png'
import ImgBanner2 from '../assets/br-2.png'
import ImgBanner3 from '../assets/br-3.png'
import SegundoNavImg1 from '../assets/segundoNavImg1.jpg';
import SegundoNavImg2 from '../assets/segundoNavImg2.jpg';
import SegundoNavImg3 from '../assets/segundoNavImg3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide d-none d-sm-block" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={ImgBanner1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={ImgBanner2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={ImgBanner3} class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div className='container ' id='SeconNav'>
    <h2 className='display-4 m-5'>Nuestros productos</h2>
        <div className='row d-flex justify-content-between'>
            
            <div className='d-none d-sm-block col-md-4'>
                <div className='card text-white'>
                    <img src={SegundoNavImg1} alt="" width="100%" />
                    <div className='card-img-overlay texto-segundoNav'>
                        <h2 class="card-title display-5 text-center">
                            Nuevos Lanzamientos
                        </h2>
                    </div>
                </div>
            </div>
            
            <div className='d-none d-sm-block col-md-4 '>
                <div className='card text-white'>
                    <img src={SegundoNavImg2} alt="" width="100%" />
                    <div className='card-img-overlay texto-segundoNav'>
                        <h2 class="card-title display-5 text-center">
                            Todo lo nuevo del vinilo
                        </h2>    
                    </div>
                </div>
            </div>

            <div className='d-none d-sm-block col-md-4'>
                <div className='card text-white'>
                    <img src={SegundoNavImg3} alt="" width="100%" />
                    <div className='card-img-overlay texto-segundoNav'>
                        <h2 class="card-title display-5 text-center">
                            Todos los vinilos usados
                        </h2>
                    </div>
                </div>
            </div>

        </div>
        <div className='row justify-conten-center text-center mt-3'>
            <NavLink to="/products" id="verMas">
                Ver mas
                <FontAwesomeIcon icon={faArrowRight} />
            </NavLink>
        </div>
    </div>
    
    <div className='container-fluid pb-5' id="notificaciones">
        <div className='row text-center'>
            <h2 className='display-5 mt-4 mb-4'>Notificaciones</h2>
            <p className='text-monospace'>
            Obtenga actualizaciones oportunas de sus productos favoritos
            </p>
        </div>
        <form className='row justify-content-center mt-1' >
            <div className='col-3'>
                <input type="email" name="" id="" className='form-control' placeholder='Email' />
            </div>
            <div className='col-auto'>
                <NavLink to="/products" className='btn btn-dark' >
                    <FontAwesomeIcon icon={faPaperPlane} />
                </NavLink>
            </div>
        </form> 
    </div>

    </>
  )
}
