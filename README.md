# E-Commerce Backend

## Description

E-Commerce Backend is a SQL database using the Sequelize ORM. The program constructs a database with 3 major tables: Categories, Products, and Tags. A RESTful API route is configured to allow communication back and forth to the database.

- Use the categories API to: fetch all categories, fetch a single category, add a category, and delete a category
- Use the products API to: fetch all products, fetch a single product, add a product, and delete a product
- Use the Tags API to: fetch all Tags, fetch a single tag, add a tag, and delete a tag

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#Credits)
- [Questions](#questions)

![image](./ecommerce_img.jpg)

## Installation

1. Prerequisite: Mysql or another sql database is already configured. The instructions will use mysql.
2. Clone the repository then run `npm install package.json` to make sure all dependencies are gotten.
3. Navigate to the DB folder.
4. Run `mysql -u root -p < schema.sql`
5. (Optional) run `npm run seeds`.

## Usage

Once the schema has been applied, you can run npm start. Upon launching, the server database will start to listen on port 3001. You can now interact with the localhost:3001/api with either a browser or a REST client such as Insomnia.

## Credits

http://github.com/mondrovic

## Inquiries

Any questions or inquiries can go to mondrovic1@gmail.com
Matthew Ondrovic
https://githbub.com/mondrovic
