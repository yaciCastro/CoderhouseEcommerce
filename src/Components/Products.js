import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import './Product.css'

export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
            {products.length !== 0 && <h1 className='title'>Productos</h1>}
            <div className='products-container'>
                {products.length === 0 && <div className="title">internet lento... cargando...</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='title-name container'>
                            {product.ProductName}
                        </div>
                        <div className='title-precio container'>
                            $ {product.ProductPrice}.00
                        </div>
                        <div className='container'>
                            <button className='btn btn1' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}><p className='title-btn'>AGREGAR AL CARRITO</p></button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
