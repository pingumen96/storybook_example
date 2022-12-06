import { Server } from "miragejs";

const productData = [
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
];

const server = new Server({
    routes() {
        this.namespace = '/api';
        this.get('/cart', () => ({ data: [productData[1]] }));
        this.get('/products', () => ({ data: productData }));
        this.get('/profile', () => ({
            name: 'John Doe',
            memberSince: '2020-01-01',
            recentOrders: [
                { orderId: 1, name: 'Latte' },
                { orderId: 2, name: 'Cappuccino' },
                { orderId: 3, name: 'Americano' },
            ]
        }));

        this.get('/users', () => [
            { id: 1, name: 'Bob' },
            { id: 2, name: 'Alice' },
            { id: 3, name: 'John' },
        ]);
    }
});

export default server;