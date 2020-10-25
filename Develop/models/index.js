// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "test",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "test",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "test",
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "test",
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
