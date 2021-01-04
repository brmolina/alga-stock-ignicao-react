import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { getAllProducts } from '../../services/Products.service';
//import Button from '../../shared/Button';
import Container from '../../shared/Container';
//import Form from '../../shared/Form';
//import Input from '../../shared/Input';
import Table, { TableHeader } from '../../shared/Table';
import { Product } from '../../shared/Table/Table.mockdata';
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

  const [products, setProducts] = useState<Product[]>([])

  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)

  useEffect(()=> {
    async function fetchData() {
      const _products = await getAllProducts()
      setProducts(_products)
    }
    fetchData()
  }, [])

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        _id: String(products.length + 1),
        ...product
      }
    ])
  } 

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(products.map(product => 
      product._id === newProduct._id
      ? newProduct
      : product
    ))

    setUpdatingProduct(undefined)
    
  }

  const deleteProduct = (id: string)=> {
    setProducts(products.filter(product => product._id !== id))
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
        deleteProduct(product._id)
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