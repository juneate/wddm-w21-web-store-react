import React from 'react'

const ProductFilter = ({filters, setFilters}) => {

  const handleRatingChange = (event)=>{
    setFilters({
      ...filters,
      rating: event.target.value
    })
  }

  return (
    <form className="filters">
      <h2>Filters</h2>

      <div className="filter-options">
        <fieldset>
          <input type="search" value={filters.query} onChange={(event)=>{
              setFilters({
                ...filters,
                query: event.target.value
              })
            }} />
        </fieldset>
        <fieldset>
          <legend>Ratings (above)</legend>
          <ol className="filter-list">
            <li>
              <input type="radio" name="rating" value="all" id="aboveZero" onChange={handleRatingChange} checked={(filters.rating === `all`) ? true : false} />
              <label htmlFor="aboveZero">Any review</label>
            </li>
            <li>
              <input type="radio" name="rating" value="1" id="aboveOne" onChange={handleRatingChange} />
              <label htmlFor="aboveOne">
                <span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
              </label>
            </li>
            <li>
              <input type="radio" name="rating" value="2" id="aboveTwo" onChange={handleRatingChange} />
              <label htmlFor="aboveTwo">
                <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
              </label>
            </li>
            <li>
              <input type="radio" name="rating" value="3" id="aboveThree" onChange={handleRatingChange} />
              <label htmlFor="aboveThree">
                <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
              </label>
            </li>
            <li>
              <input type="radio" name="rating" value="4" id="aboveFour" onChange={handleRatingChange} />
              <label htmlFor="aboveFour">
                <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span>
              </label>
            </li>
          </ol>
        </fieldset>
        <fieldset>
          <label htmlFor="passingby">Max price</label>
					<input type="range" id="passingby" min="0" max="300" value={filters.maxPrice} step="5" onChange={(event)=>{
              setFilters({
                ...filters,
                maxPrice: Number(event.target.value)
              })
            }} />
					<output htmlFor="passingby">{(filters.maxPrice) ? `under $${Math.round(filters.maxPrice)}` : `all`}</output>
        </fieldset>
      </div>

      <fieldset>
        <label htmlFor="sort">Show</label>
        <select name="sort" id="sort" defaultValue={filters.sortBy} onChange={(event)=>{
              setFilters({
                ...filters,
                sortBy: event.target.value
              })
            }}>
          <option value="none" disabled>-- Sort by --</option>
          <option value="lowest">Price, lowest to highest</option>
          <option value="highest">Price, highest to lowest</option>
          <option value="rating">Highest rated</option>
        </select>
      </fieldset>
    </form>
  )
}

export default ProductFilter
