import React from 'react';
import './ProductListItem.css';

export default function ProductListItem({ name, price, imageUrl, onAddToCart, isSoldOut, isOnSale }) {
    return (
        <div className="card" style={{
            backgroundColor: isOnSale ? '#E8F6FF' : 'white',
        }}>
            <h2>{ name }</h2>
            <img src={ imageUrl } alt={ name } />
            <small>{ price }</small>
            <button onClick={ onAddToCart }>
                { isSoldOut ? "Sold out" : "Add to cart" }
            </button>
        </div>
    )
}