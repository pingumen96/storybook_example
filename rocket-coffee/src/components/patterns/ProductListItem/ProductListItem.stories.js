import React from 'react';
import ProductListItem from './ProductListItem';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from 'storybook-addon-knobs-color-options';

export default {
    title: 'ProductListItem',
    decorators: [withKnobs],
}

export const Standard = ({
    name=text("Name", "Standard Coffee"),
    price=text("price", "2.50"),
    onAddToCart=action('Add to cart'),
    imageUrl=text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/")}) => (
    <ProductListItem
        name={ name }   
        price={ price }
        onAddToCart={ onAddToCart }
        imageUrl={ imageUrl }
    />
)

export const SoldOut = () => (
    <ProductListItem
        name={ text("Name", "Standard Coffee") }
        price={ text("price", "2.50")}
        onAddToCart={ action('Add to cart') }
        imageUrl={ text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/") }
        isSoldOut
    />
)

export const OnSale = () => (
    <ProductListItem
        name={ text("Name", "Standard Coffee") }
        price={ text("price", "2.50")}
        onAddToCart={ action('Add to cart') }
        imageUrl={ text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/") }
        isOnSale
    />
)