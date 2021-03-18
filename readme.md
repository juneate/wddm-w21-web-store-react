# Web Store

## Getting started

1. Install the project dependencies
   ```shell
   npm install
   ```

2. Run the application
   ```shell
   npm run start
   ```

## Component map

- App
   - PageHome
   - PageAbout
   - PageContact
   - PageShop
      - ProductFilter
      - ProductList
         - [Product]
         - Pagination


## Paths

- `/`: `PageHome`
- `/shop`: `PageShop`
   - `/shop/filter`
- `/product/product-name`: `PageProduct`
- `/about`: `PageAbout`

<!-- 
- Pages: Home, about, contact, shop
   - Shop: categories? items? search results? -->
