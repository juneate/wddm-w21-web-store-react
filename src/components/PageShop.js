import React from 'react'
import ProductList from 'components/ProductList'
import ProductFilter from 'components/ProductFilter'

const PageShop = ({products}) => {
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