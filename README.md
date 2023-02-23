# xem-web
E-commerce Website
This is a sample e-commerce website built with Node.js, Express, and MongoDB. It allows users to browse products, add them to a cart, and checkout with their billing and shipping information.

Features
Browse products by category or search by keyword
View product details including images, description, and price
Add products to a cart and adjust the quantity
View the cart total and checkout with billing and shipping information
View order history and status

Getting Started
To get started, clone the repository and install the dependencies:

git clone https://github.com/Qarani-m/xem-web.git

cd e-commerce-website
npm install

You'll also need to set up a MongoDB database and configure.
The connection url is in the .env file.
DATABASE_URL="mongodb://127.0.1:27017/coza"
the port number is also inthe .env file

To start the server, run the following command:
npm start 
Then visit http://localhost:60606 in your web browser to view the website.

Dependencies
express
express-session
express-validator
mongodb
pug
dotenv


Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
