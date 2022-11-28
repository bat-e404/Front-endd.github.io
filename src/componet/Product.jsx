import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Skeleton from 'react-loading-skeleton'

export default function Product() {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);  
        }
        getProducts();
    }, [])

    const Loading = () => {
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-ms-6">
                    <Skeleton height={50} width={300}/>
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return(
            <>
                <div className='col-md-6'>
                    <img src={product.image} alt="" height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">
                        {product.title}
                    </h1>
                    <p className='lead fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <FontAwesomeIcon icon={faStar}/>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ${product.price}
                    </h3>
                    <p className='lead'>
                        {product.description}
                    </p>
                    <button className='btn btn-outline-dark px-4 py-2'>
                        Agregar al carrito
                    </button>
                    <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'>
                        Mi carrito
                    </NavLink>
                </div>
            </>
        )
    }

  return (
    <div>
        <div className='container mt-5' id="productos">
            <div className='row'>
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}
