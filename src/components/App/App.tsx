import React, { useState } from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
import Table, { TableHeader } from '../../shared/Table';
import Products, { Product } from '../../shared/Table/Table.mockdata';
import Header from '../Header';
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import './App.css';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {

  const [products, setProducts] = useState(Products)

  const [updatingProduct, setUpdatindProduct] = useState<Product | undefined>(products[0])

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product
      }
    ])
  } 

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(products.map(product => 
      product.id === newProduct.id
      ? newProduct
      : product
    ))

    setUpdatindProduct(undefined)
    
  }

  return (
    <div className="App">
      <Header title="AlgaStock"/>

        <Container>
          <Table
            headers={headers}
            data={products}
            enableActions={true}
            onDelete={console.log}
            //onDetail={console.log}
            onEdit={console.log}
          />
            <ProductForm
              form={updatingProduct}
              onSubmit={handleProductSubmit}
              onUpdate={handleProductUpdate}
            />
        </Container>
    </div>
  )
}

export default App