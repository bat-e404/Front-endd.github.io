import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <>
        <div className='container'>
            <div className='row justify-content-center'>
            <form className='col-4 p-4 mt-5  shadow'>
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
