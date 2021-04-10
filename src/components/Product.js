import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({data, style}) => {
  const productImg = require(`img/${data.img}`).default

  const styling = {
    product: {
      boxShadow: `0 0 0.5rem rgba(0, 0, 0, 0.5)`,
      margin: `2em 0`,
      padding: `1em`,
      backgroundColor: `rgb(245,245,245)`
    },
    header: {
      display: `grid`,
      gridGap: `1em`,
      gridTemplateColumns: `10em auto`
    },
    heading: {
      fontFamily: `system-ui, helvetica, arial, sans-serif`,
      fontSize: `1.2em`,
      color: `#222`
    }
  }

  return (
    <article className="product" data-id={data.id} style={{...style, ...styling.product}}>
      <header style={styling.header}>
        <img src={productImg} alt={data.name} />
        <div>
          <h3><Link to={`/product/${data.slug}`} style={styling.heading}>{data.name}</Link> <small><output value={data.rating}>{data.rating} <span className="material-icons">star</span></output></small></h3>
          <data value={data.cost}>${data.cost.toFixed(2)}</data>
          <p>Description goes here.</p>
          <Link to={`/product/${data.slug}`}>see more</Link>
        </div>
      </header>
      {/* <form>
        <fieldset>
          <legend>Colours</legend>
          <ul>
            <li><label><input type="radio" name="colour" value="r" /> Red</label></li>
            <li><label><input type="radio" name="colour" value="w" /> White</label></li>
            <li><label><input type="radio" name="colour" value="b" /> Blue</label></li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Sizes</legend>
          <ol>
            <li><label><input type="radio" name="size" value="m" /> M</label></li>
            <li><label><input type="radio" name="size" value="l" /> L</label></li>
            <li><label><input type="radio" name="size" value="xl" /> XL</label></li>
          </ol>
        </fieldset>
      </form> */}
      <footer>
        <button type="button"><span className="material-icons">add_shopping_cart</span> Add to Cart</button>
        <button type="button"><span className="material-icons">favorite</span></button>
      </footer>
    </article>
  )
}

export default Product
