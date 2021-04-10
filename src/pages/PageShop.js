import React, {useContext, useEffect, useState} from 'react'
import ProductContext from 'contexts/product'
import ProductList from 'components/ProductList'
import ProductFilter from 'components/ProductFilter'

const PageShop = () => {

  const products = useContext(ProductContext)
  const [productResult, setProductResult] = useState(products)

  const [filters, setFilters] = useState({
    query: ``,
    rating: `all`,
    maxPrice: 0,
    sortBy: `none`
  })

  useEffect(() => {
    
    // Creat a clone Array
    let filteredProducts = [...products]
    console.log(`Filter updated`, filters, Number(filteredProducts[0].cost), Number(filteredProducts[0].cost) <= Number(filters.maxPrice))


    // Check all the filters
    if (filters.query)
      filteredProducts = filteredProducts.filter((prod) => prod.name.toLowerCase().includes(filters.query.toLowerCase().trim()))
    if (filters.rating !== `all`)
      filteredProducts = filteredProducts.filter((prod) => Number(prod.rating) >= Number(filters.rating))
    if (filters.maxPrice > 0)
      filteredProducts = filteredProducts.filter((prod) => Number(prod.cost) <= Number(filters.maxPrice))

    // Sort if appropriate
    switch (filters.sortBy) {
      case `highest`:
        filteredProducts.sort((a, b) => a.cost - b.cost)
        break;
      case `lowest`:
        filteredProducts.sort((a, b) => b.cost - a.cost)
        break;
      case `rating`:
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break;
    }

    // Assign the filtered products to the result state
    setProductResult(filteredProducts)

  }, [filters])

  /* 
  const handleSortProducts = (event) => {
    switch (event.target.value) {
      case `highest`:
        setProductResult(sortProducts(products, byPriceAsc))
        break;
      case `lowest`:
        setProductResult(sortProducts(products, byPriceDesc))
        break;
      case `rating`:
        setProductResult(sortProducts(products, byRating))
        break;
    }
  }
  */


  return (
    <main className="products container">
      <header className="heading">
        <h1>Sale on [Category Name]</h1>
      </header>

      <ProductFilter filters={filters} setFilters={setFilters} />
      
      <ProductList products={productResult} />

    </main>
  )
}

export default PageShop
