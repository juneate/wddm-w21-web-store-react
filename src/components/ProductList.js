import React from 'react'
import Product from 'components/Product'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'

const ProductList = ({products}) => {
  
  const allProducts = products.map((prod, i) => <Product key={prod.id} data={prod} style={{}} />)
  // const [pageWereOn, setPageWereOn] = useState(1)

  return (
    <>
      <section className="results">
        <h2 className="subheading">Results</h2>

        <div className="product-list">
          {allProducts}
        </div> 
      </section>

      {/* <nav aria-label="Pagination" className="pagination">
        <p>1-6 of {allProducts.length} products found</p>
        <Pagination defaultCurrent={1} total={50} defaultPageSize={5} />
      </nav> */}
    </>
  )
}

export default ProductList
