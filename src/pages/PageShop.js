import React, {useContext} from 'react'
import ProductContext from 'contexts/product'
import ProductList from 'components/ProductList'
import ProductFilter from 'components/ProductFilter'

const PageShop = () => {

  const products = useContext(ProductContext)

  return (
    <main className="products">
      <header className="heading">
        <h1>Sale on [Category Name]</h1>
      </header>

      <ProductFilter />
      
      <ProductList products={products} />

    </main>
  )
}

export default PageShop
