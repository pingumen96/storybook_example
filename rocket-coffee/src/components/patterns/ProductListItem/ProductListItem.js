import React from 'react';
import Button from '../../atoms/Button/Button';
import Card from '../../atoms/Card/Card';
import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';
import './ProductListItem.css';


export default function ProductListItem({ name, price, imageUrl, onAddToCart, isSoldOut, isOnSale }) {
    return (
        <Card highlight={ isOnSale }>
            <Heading>{ name } {isOnSale && <span>(On Sale)</span>}</Heading>
            <img src={ imageUrl } alt={ name } />
            <Text>{ price }</Text>
            <Button onClick={ onAddToCart } disabled={ isSoldOut }>
                { isSoldOut ? "Sold out" : "Add to cart" }
            </Button>
        </Card>
    )
}