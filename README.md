# Coza: An E-commerce Website built with Node.js, Express, and MongoDB

## Description

AwesomeStore is a full-stack e-commerce website that allows users to browse and purchase products online. The website is built with Node.js and uses Express as the web framework, MongoDB as the database, and ejs as the templating engine.

## Features

- Browse products by category or search by keyword
- View product details including images, description, and price
- Add products to a cart and adjust the quantity
- View the cart total and checkout with billing and shipping information
- Checkout payment through mpesa
- Get SMS Notificaton after successfull checkout
- View order history and status

## Demo

Here's a [live demo](https://awesome-store-demo.herokuapp.com/) of the website hosted on Heroku.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/awesome-store.git

```
2. Install dependencies:
```
cd xem-web
npm install
```
3. Set up a MongoDB database and configure the connection URL in the .env file:

```
DATABASE_URL=mongodb://localhost:27017/coza
```
4. Start the server:
```
npm start
```
5. Visit http://localhost:60607 in your web browser to view the website.

## Dependencies
```Express
Express-session
Express-validator
MongoDB
Mongoose
ejs
dotenv
bcrypt
body-parser
cookie-parser
daraja
moment
morgan 
nodemailer
nodemon
request
```
## Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

