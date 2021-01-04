import React, { useState } from 'react';
import Swal from 'sweetalert2'
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

  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)

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

    setUpdatingProduct(undefined)
    
  }

  const deleteProduct = (id: number)=> {
    setProducts(products.filter(product => product.id !== id))
  }

  const handleProductDelete = (product: Product)=> {
    Swal
    .fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete ${product.name}!`
    })
    .then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product.id)
        setUpdatingProduct(undefined)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  const handleProductDetail = (product: Product)=> {
    
      Swal.fire(
      'Product Details',
      `${product.name} costs $${product.price}. And we have ${product.stock} item(s) available in stock`,
      'info'
      )
    
  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }

  return (
    <div className="App">
      <Header title="AlgaStock"/>

        <Container>
          <Table
            headers={headers}
            data={products}
            enableActions={true}
            onDelete={handleProductDelete}
            onDetail={handleProductDetail}
            onEdit={handleProductEdit}
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