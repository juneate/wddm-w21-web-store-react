import React from 'react'
import 'css/App.css'
import ProductList from 'components/ProductList'

const App = () => {

	const productsAr = [
		{
			id: 1,
			name: `Neon "Pizza" Sign`,
			img: `henrique-hanemann-BYgiOBHq6Cs-unsplash.jpg`
		}, {
			id: 2,
			name: `Round Mirror`,
			img: `stacey-zinoveva-U9Divbch2kk-unsplash.jpg`
		}, {
			id: 3,
			name: `Wooden Laptop Tray`,
			img: `xps-bXfQLglc81U-unsplash.jpg`
		}
	]

	return (
		<>
			<header className="page-header">
				<a href="index.html" className="logo">Hello World</a>

				<button type="button" className="nav-toggle">
					<span className="material-icons">menu</span>
				</button>
				<nav aria-label="Primary" className="navigation">
					<ul className="menu">
						<li><a href="#">Shop</a>
							<ul className="submenu">
								<li><a href="#">Subcategory</a></li>
								<li><a href="#">Subcategory</a></li>
								<li><a href="#">Subcategory</a></li>
							</ul>
						</li>
						<li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
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

			<ProductList products={productsAr} />

			<footer className="page-footer">
				<ul className="social">
					<li><a href="#"><span className="material-icons">face</span> Facebook</a></li>
					<li><a href="#"><span className="material-icons">camera_alt</span> Instagram</a></li>
					<li><a href="#"><span className="material-icons">alternate_email</span> Twitter</a></li>
				</ul>
				<nav aria-label="Legal">
					<ul className="legal">
						<li><a href="#">Terms of Use</a></li>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Accessibility Policy</a></li>
					</ul>
				</nav>
				<p className="copyright">&copy; Copyright, 1991.</p>
			</footer>
		</>
	)
}

export default App