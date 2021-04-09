const byPriceAsc = (a, b) => a.cost - b.cost
const byPriceDesc = (a, b) => b.cost - a.cost
const byRating = (a, b) => b.rating - a.rating

const sortProducts = (prods, sortType) => {
	const clone = [...prods]
	return clone.sort(sortType)
}

export {sortProducts, byPriceAsc, byPriceDesc, byRating}
