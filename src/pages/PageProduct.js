import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import ProductContext from 'contexts/product'
import Product from 'components/Product'

  

const PageProduct = () => {

  const {slug} = useParams()
  const products = useContext(ProductContext)


  // Which product do I need to show here???
  const prod = products.find((prod) => prod.slug === slug) || products[0]    // For now, assume it's always the first product

  return (
    <main>
      <h1>One Product</h1>
      <Product data={prod} />
    </main>
  )
}

export default PageProduct
