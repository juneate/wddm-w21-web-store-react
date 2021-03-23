import React from 'react'
import {Link} from 'react-router-dom'
// import 'css/Product.css'

const Product = ({data, style}) => {
  const productImg = require(`img/${data.img}`).default

  const styling = {
    product: {
      boxShadow: `0 0 0.5rem rgba(0, 0, 0, 0.5)`,
      margin: `2em`,
      padding: `1em`,
      backgroundColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    },
    heading: {
      fontFamily: `system-ui, helvetica, arial, sans-serif`,
      fontSize: `2em`,
      color: `#222`
    }
  }

  return (
    <article className="product" data-id={data.id} style={{...style, ...styling.product}}>
      <header>
        <img src={productImg} alt={data.name} />
        <h3><Link to={`/product/${data.slug}`} style={styling.heading}>{data.name}</Link></h3>
        <data value="39"><del>$50.00</del> <ins>$39.00</ins></data>
        <p>Here is a shot of this product that might entice a user to click and add it to their cart.</p>
        <dl>
          <dt>Rating</dt>
          <dd>4.4 <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span></dd>
        </dl>
        <a href="#">see more</a>
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