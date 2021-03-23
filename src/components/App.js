import React from 'react'
import 'css/App.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Header from 'components/Header'
import PageShop from 'components/PageShop'
import PageHome from 'components/PageHome'
import PageContact from 'components/PageContact'
import PageAbout from 'components/PageAbout'
import PageProduct from 'components/PageProduct'
import Page404 from 'components/Page404'

const App = () => {

	const productsAr = [
		{
			id: 1,
			slug: `neon-pizza-sign`,
			name: `Neon "Pizza" Sign`,
			img: `henrique-hanemann-BYgiOBHq6Cs-unsplash.jpg`
		}, {
			id: 2,
			slug: `round-mirror`,
			name: `Round Mirror`,
			img: `stacey-zinoveva-U9Divbch2kk-unsplash.jpg`
		}, {
			id: 3,
			slug: `wooden-laptop-tray`,
			name: `Wooden Laptop Tray`,
			img: `xps-bXfQLglc81U-unsplash.jpg`
		}
	]

	return (
		<Router>
			<Header />

			<Switch>
				<Route exact path="/" component={PageHome} />
				<Route path="/about" component={PageAbout} />
				<Route path="/contact" component={PageContact} />
				<Route path="/shop"><PageShop products={productsAr} /></Route>
				<Route path="/product/:slug"><PageProduct products={productsAr} /></Route>
				<Route path="*" component={Page404} />
				{/* <Redirect to="/" /> */}
			</Switch>

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
		</Router>
	)
}

export default App