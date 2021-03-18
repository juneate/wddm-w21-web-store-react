import React from 'react'

const ProductFilter = () => {
  return (
    <form className="filters">
      <h2>Filters</h2>

      <div className="filter-options">
        <fieldset>
          <legend>Colour</legend>
          <ul className="filter-list">
            <li><input type="checkbox" name="colour" value="black" id="black" /> <label htmlFor="black">Black</label></li>
            <li><input type="checkbox" name="colour" value="white" id="white" /> <label htmlFor="white">White</label></li>
            <li><input type="checkbox" name="colour" value="grey" id="grey" /> <label htmlFor="grey">Grey</label></li>
            <li><input type="checkbox" name="colour" value="red" id="red" /> <label htmlFor="red">Red</label></li>
            <li><input type="checkbox" name="colour" value="blue" id="blue" /> <label htmlFor="blue">Blue</label></li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Sizes</legend>
          <ol className="filter-list">
            <li><input type="checkbox" name="size" value="xs" id="xs" /> <label htmlFor="xs">XS</label></li>
            <li><input type="checkbox" name="size" value="sm" id="sm" /> <label htmlFor="sm">S</label></li>
            <li><input type="checkbox" name="size" value="md" id="md" /> <label htmlFor="md">M</label></li>
            <li><input type="checkbox" name="size" value="lg" id="lg" /> <label htmlFor="lg">L</label></li>
            <li><input type="checkbox" name="size" value="xl" id="xl" /> <label htmlFor="xl">XL</label></li>
          </ol>
        </fieldset>
        <fieldset>
          <legend>Ratings (above)</legend>
          <ol className="filter-list">
            <li>
              <input type="radio" name="rating" value="4" id="aboveFour" />
              <label htmlFor="aboveFour">
                <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span>
              </label>
            </li>
            <li>
              <input type="radio" name="rating" value="3" id="aboveThree" />
              <label htmlFor="aboveThree">
                <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
              </label>
            </li>
            <li>
              <input type="radio" name="rating" value="2" id="aboveTwo" />
              <label htmlFor="aboveTwo">
                <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
              </label>
            </li>
            <li>
              <input type="radio" name="rating" value="1" id="aboveOne" />
              <label htmlFor="aboveOne">
                <span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
              </label>
            </li>
          </ol>
        </fieldset>
      </div>
      <fieldset>
        <label htmlFor="sort">Show</label>
        <select name="sort" id="sort">
          <option value="price-high">Price, highest to lowest</option>
          <option value="price-low">Price, lowest to highest</option>
          <option value="newest">Newest releases</option>
        </select>
      </fieldset>
    </form>
  )
}

export default ProductFilter