var db = require("../models");
var Sequelize = require("sequelize");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Product.findAll({ raw: true }).then(function (dbProduct) {
      var hbsObject = {
        products: dbProduct
      };
      // console.log(dbProduct)
      res.render("index", hbsObject);
    });
  });

  app.get("/electronics", function (req, res) {
    db.Product.findAll({ raw: true, where: { category_id: 1 } }).then(function (
      dbProduct
    ) {
      var hbsObject = {
        products: dbProduct
      };
      // console.log(dbProduct)
      res.render("items", hbsObject);
    });
  });

  // app.get("/grocery", function(req, res) {
  //   db.Product.findAll({ raw: true, where: { category_id: 2 } }).then(function(
  //     dbProduct
  //   ) {
  //     var hbsObject = {
  //       products: dbProduct
  //     };
  //     // console.log(dbProduct)
  //     res.render("items", hbsObject);
  //   });
  // });

  // app.get("/books", function(req, res) {
  //   db.Product.findAll({ raw: true, where: { category_id: 3 } }).then(function(
  //     dbProduct
  //   ) {
  //     var hbsObject = {
  //       products: dbProduct
  //     };
  //     // console.log(dbProduct)
  //     res.render("items", hbsObject);
  //   });
  // });

  app.get("/clothing", function (req, res) {
    db.Product.findAll({ raw: true, where: { category_id: 4 } }).then(function (
      dbProduct
    ) {
      var hbsObject = {
        products: dbProduct
      };
      // console.log(dbProduct)
      res.render("items", hbsObject);
    });
  });

  app.get("/outdoors", function (req, res) {
    db.Product.findAll({ raw: true, where: { category_id: 5 } }).then(function (
      dbProduct
    ) {
      var hbsObject = {
        products: dbProduct
      };
      // console.log(dbProduct)
      res.render("items", hbsObject);
    });
  });

  app.get("/automotive", function (req, res) {
    db.Product.findAll({ raw: true, where: { category_id: 6 } }).then(function (
      dbProduct
    ) {
      var hbsObject = {
        products: dbProduct
      };
      // console.log(dbProduct)
      res.render("items", hbsObject);
    });
  });

  app.get("/item/:id", function (req, res) {
    db.Product.findOne({ where: { id: req.params.id } }).then(function (
      dbProduct
    ) {
      res.render("item", {
        name: dbProduct.product_name,
        image: dbProduct.image_link,
        detail: dbProduct.item_description,
        price: dbProduct.price,
        highlight: dbProduct.highlight
      });
    });
  });

  app.get("/search/:item?", function (req, res) {
    if (req.params.item) {
      db.Product.findAll({
        where: {
          product_name: {
            [Sequelize.Op.like]: "%" + req.params.item + "%"
          }
        },
        raw: true
      }).then(function (dbProduct) {
        var hbsObject = {
          products: dbProduct
        };
        // console.log(dbProduct)
        res.render("items", hbsObject);
      });
    };
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
