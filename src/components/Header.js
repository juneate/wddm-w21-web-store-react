import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Header = () => {

  const Menu = styled.ul`
    display: flex;
    background-color: #333;
    color: #fff;
  `

  return (
    <header>
      <Link to="/" className="logo">Hello World</Link>

      <button type="button" className="nav-toggle">
        <span className="material-icons">menu</span>
      </button>
      <nav aria-label="Primary" className="navigation">
        <Menu>
          <li><Link to="/shop">Shop</Link>
            <ul>
              <li><a href="#">Subcategory</a></li>
              <li><a href="#">Subcategory</a></li>
              <li><a href="#">Subcategory</a></li>
            </ul>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </Menu>
      </nav>

      <form className="search">
        <label>Search
        <input type="search" name="find" id="find" />
        </label>
        <button type="button"><span className="material-icons">search</span></button>
      </form>

      <ul className="your-products">
        <li><a href="#"><span className="material-icons" aria-label="Favourites">favorite_border</span></a></li>
        <li><a href="#"><span className="material-icons" aria-label="Items in your cart">shopping_cart</span></a></li>
      </ul>
    </header>
  )
}

export default Header