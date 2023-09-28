# Project Plan for E-Commerce App
> Documentation and Project Management

- [x] Create a GitHub repository for the project.
  - [x] Set up a project board with task tracking.
 - API - `https://fakestoreapi.com/`
## Tier 1: MVP
### Front end setup

- [x] Create a new front-end application from scratch or use the starter.
- [x] Deploy the front-end on a hosting platform.
- ## User (Not Logged In) Features

- [x] Implement basic website access for users.
- [x] Create a product listing page to view all available products.
- [x] Design individual product pages with descriptions, photos, prices, etc.
- [x] Add sorting functionality for products (by name, price, etc.).
- [x] Implement product filtering by category, type, and price range.
- [x] Design an intuitive and user-friendly UI/UX.
- ## User (Logged In) Features

- [x] Allow users to add items to their cart.
- [x] Implement a persistent shopping cart.
- [x] Enable cart editing (change quantity, remove items).
- [x] Create a checkout process with a confirmation page.
## Tier 2: E-Commerce Stretch
- ## Device Compatibility and Accessibility

- [ ] Ensure the website is responsive and usable on all device types.
- [ ] Tailor the UI to different device sizes (phone, tablet, laptop, desktop).
- [ ] Implement accessibility features (screen-reader friendliness, keyboard navigation, colorblind-friendly).
- [ ] Show loading indicators during data retrieval.
- [x] Handle errors gracefully and provide feedback to users.
  - ## Enhance Shopping Cart Functionality

- [ ] Enable cart synchronization across different devices for logged-in users (requires a backend).
- [ ] Implement user authentication to secure cart data (requires a backend).
- [ ] Allow guest users to have persistent carts (requires backend or localStorage).
- [ ] Support the transition from guest to logged-in user with cart data retention (requires backend or localStorage).
- [ ] Integrate the real Stripe API into the checkout workflow (requires backend).
- ## Product Reviews

- [ ] Allow logged-in users to write product reviews.
- [ ] Implement a review submission form or rating system.
- [ ] Associate reviews with the correct user (requires backend).
- ## User Account Features

 - [ ] Implement session management to keep users logged in across sessions (requires backend).
 - [ ] Create a user profile page for updating personal information (requires backend).
 - [ ] Implement order history to display past purchases with prices (requires backend).

## How to

you can fetch data with any kind of methods you know(fetch API, Axios, jquery ajax,...)

### Get all products

```js
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Get a single product

```js
fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Add new product

```js
fetch("https://fakestoreapi.com/products", {
  method: "POST",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

/* will return
{
 id:31,
 title:'...',
 price:'...',
 category:'...',
 description:'...',
 image:'...'
}
*/
```

Note: Posted data will not really insert into the database and just return a fake id.

### Updating a product

```js
fetch("https://fakestoreapi.com/products/7", {
  method: "PUT",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

/* will return
{
    id:7,
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}
*/
```

```js
fetch("https://fakestoreapi.com/products/8", {
  method: "PATCH",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

/* will return
{
    id:8,
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}
*/
```

Note: Edited data will not really be updated into the database.

### Deleting a product

```js
fetch("https://fakestoreapi.com/products/8", {
  method: "DELETE",
});
```

Nothing will delete on the database.

### Sort and Limit

You can use query string to limit results or sort by asc|desc

```js
// Will return all the posts that belong to the first user
fetch("https://fakestoreapi.com/products?limit=3&sort=desc")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

## All available routes

### Products

```js
fields:
{
    id:Number,
    title:String,
    price:Number,
    category:String,
    description:String,
    image:String
}
```

GET:

- /products (get all products)
- /products/1 (get specific product based on id)
- /products?limit=5 (limit return results )
- /products?sort=desc (asc|desc get products in ascending or descending orders (default to asc))
- /products/products/categories (get all categories)
- /products/category/jewelery (get all products in specific category)
- /products/category/jewelery?sort=desc (asc|desc get products in ascending or descending orders (default to asc))

POST:

- /products

-PUT,PATCH

- /products/1

-DELETE

- /products/1

### Carts

```js
fields:
{
    id:Number,
    userId:Number,
    date:Date,
    products:[{productId:Number,quantity:Number}]
}
```

GET:

- /carts (get all carts)
- /carts/1 (get specific cart based on id)
- /carts?startdate=2020-10-03&enddate=2020-12-12 (get carts in date range)
- /carts/user/1 (get a user cart)
- /carts/user/1?startdate=2020-10-03&enddate=2020-12-12 (get user carts in date range)
- /carts?limit=5 (limit return results )
- /carts?sort=desc (asc|desc get carts in ascending or descending orders (default to asc))

POST:

- /carts

PUT,PATCH:

- /carts/1

DELETE:

- /carts/1

### Users

```js
fields:
{
    id:20,
    email:String,
    username:String,
    password:String,
    name:{
        firstname:String,
        lastname:String
        },
    address:{
    city:String,
    street:String,
    number:Number,
    zipcode:String,
    geolocation:{
        lat:String,
        long:String
        }
    },
    phone:String
}
```

GET:

- /users (get all users)
- /users/1 (get specific user based on id)
- /users?limit=5 (limit return results )
- /users?sort=desc (asc|desc get users in ascending or descending orders (default to asc))

POST:

- /users

PUT,PATCH:

- /users/1

DELETE:

- /users/1

### Auth

```js
fields:
{
    username:String,
    password:String
}
```

POST:

- /auth/login
