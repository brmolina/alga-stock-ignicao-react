import { table } from "console"

export interface Product {
    id: number
    name: string
    price: number
    stock: number
}

const Products: Product[] = [
    {
        id: 1,
        name: 'Cookie',
        price: 1.25,
        stock: 12,
    },
    {
        id: 2,
        name: 'Potato',
        price: 1.00,
        stock: 15,
    },
    {
        id: 3,
        name: 'Milk',
        price: 0.99,
        stock: 20,
    },
]

export default Products