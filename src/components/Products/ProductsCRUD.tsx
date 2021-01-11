import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Table, { TableHeader } from '../../shared/Table'
import { Product } from '../../shared/Table/Table.mockdata'
import ProductForm, { ProductCreator } from './ProductForm'
import { connect, useDispatch} from 'react-redux'
import * as ProductsAction from '../../redux/Products/Products.action'
import { RootState, ThunkDispatch } from '../../redux'

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key: 'stock', value: 'Available Stock', right: true }
  ]

  declare interface ProductsCRUDProps {
      products: Product[],
      header?: TableHeader
  }

  const ProductsCRUD:  React.FC<ProductsCRUDProps>  = ( props )=> {
    const dispatch: ThunkDispatch= useDispatch()
    
    const showErrorAlert = 
      (err: Error) => Swal.fire('Ooops!', err.message, 'error')

    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)
  
    useEffect(()=> {
      fetchData()
      // eslint-disable-next-line
    }, [])
    
     async function fetchData() {
       dispatch(ProductsAction.getProducts())
       .catch(showErrorAlert)
       }
  
    const handleProductSubmit = async (product: ProductCreator) => {
      dispatch(ProductsAction.insertNewProduct(product))
      .catch(showErrorAlert)
    } 
  
    const handleProductUpdate = async (newProduct: Product) => {
      dispatch(ProductsAction.updateProduct(newProduct))
      .then(()=> setUpdatingProduct(undefined))
      .catch(showErrorAlert)
          
    }
  
    const deleteProduct = async (id: string)=> {
      dispatch(ProductsAction.deleteProduct(id))
      .then(()=>{
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      })
      .catch(showErrorAlert)
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
      .then(({value}) => value && deleteProduct(product._id))
    }
    
  
    const handleProductDetail = (product: Product)=> {
      
        Swal.fire(
        'Product Details',
        `${product.name} costs $${product.price}. And we have ${product.stock} item(s) available in stock`,
        'info'
        )
    }

      return <>
      <Table
            headers={headers}
            data={props.products}
            enableActions={true}
            onDelete={handleProductDelete}
            onDetail={handleProductDetail}
            onEdit={setUpdatingProduct}
          />
            <ProductForm
              form={updatingProduct}
              onSubmit={handleProductSubmit}
              onUpdate={handleProductUpdate}
            />
      </>
  }

const mapStateToProps = (state: RootState ) => ({
  products: state.products
})
 
export default connect(mapStateToProps)(ProductsCRUD)