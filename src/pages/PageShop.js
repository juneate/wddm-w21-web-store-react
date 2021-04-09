import React, {useContext, useState} from 'react'
import ProductContext from 'contexts/product'
import ProductList from 'components/ProductList'
import ProductFilter from 'components/ProductFilter'

const PageShop = () => {

  const products = useContext(ProductContext)
  const [productResult, setProductResult] = useState(products)

  return (
    <main className="products">
      <header className="heading">
        <h1>Sale on [Category Name]</h1>
      </header>

      <ProductFilter products={products} setProductResult={setProductResult} />
      
      <ProductList products={productResult} />

    </main>
  )
}

export default PageShop
