import React from "react";
import Products from "./Products";
import { Server } from "miragejs";

let server = new Server();
server.get('/api/products/', {
    data: [
        {
            id: 1,
            name: "Standard Coffee",
            price: 2.50,
            imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/"
        },
        {
            id: 2,
            name: "Large Coffee",
            price: 3.50,
            imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/"
        },
        {
            id: 3,
            name: "Small Coffee",
            price: 1.50,
            imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/"
        },
        {
            id: 4,
            name: "Medium Coffee",
            price: 2.50,
            imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/"
        },
        
    ]
})

export default { title: 'Screens/Products' };

export const Standard = () => <Products />;