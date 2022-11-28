import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Registro() {
  return (
    <>
        <div className='container mb-5'>
            <div className='row justify-content-center'>
            <form className='col-4 p-4 mt-5  shadow'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Nombre' required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Apellido Paterno</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Apellido Paterno' required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Apellido Materno</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Apellido Materno' required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='email@ejemplo.com' required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='**********' required/>
                </div>
                <NavLink to="/" className="btn btn-dark ">Submit</NavLink>
            </form>
            </div>
        </div>
    </>
  )
}
