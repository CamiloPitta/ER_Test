## E-commerce project

### Project overview

This project shows a protitype of a functional basic e-commerce website. It is built using React.js and Typescript; also, Vite was used to create the base project and React Router as the the routing solution. Tailwind CSS was used for the styling, and TanStack Query to manage API queries and improve the navigation experience.

Its deploy can be seen on https://er-e-commerce.netlify.app/

### Project details

The site shows three views (home, list, product) and a side cart:

- Home page: Shows a banner, a section with four products, and a section with information about the store
- List page: Shows all products in the store
- Product page: Shows the details of a specific product (image, price, description). It has a quantity selector and an Add To Cart button.
- Cart: Cart drawer that displays the product's image, name, quantity, quantity selector. It also calculates the total spent and has a checkout button. It displays different messages depending on the cart content/purchase status. 

### Project running

1. Clone the repository
2. Install node modules
   ```npm install```
3. Run the app
   ```npm run dev```
