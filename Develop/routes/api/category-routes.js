const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// gets all category information with associated products
router.get("/", (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
  })
    .then((catData) => res.json(catData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// gets single category by id and shows product information
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
  })
    .then((catData) => {
      if (!catData) {
        res.status(404).json({ message: "No category with this id" });
        return;
      }
      res.json(catData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// creates new category
router.post("/", (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((catData) => res.json(catData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// updates category
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((catData) => {
      if (!catData) {
        res.status(404).json({ message: "No category found with that ID" });
        return;
      }
      res.json(catData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a category
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((catData) => {
      if (!catData) {
        res.status(404).json({ message: "No category found with that ID" });
        return;
      }
      res.json(catData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
