
export interface Product {
    _id: string
    name: string
    price: number
    stock: number
    createdAt?: string
    updatedAt?: string
}

const Products: Product[] = [
    {
       _id: '1',
        name: 'Cookie',
        price: 1.25,
        stock: 12,
    },
    {
       _id: '2',
        name: 'Potato',
        price: 1.00,
        stock: 15,
    },
    {
       _id: '3',
        name: 'Milk',
        price: 0.99,
        stock: 20,
    },
]

export default Products