var db = require("../models");
module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Product.findAll({raw: true}).then(function(dbProduct){
      var hbsObject = {
        products: dbProduct
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.get("/item/:id", function (req, res) {
    db.Product.findOne({ where: { id: req.params.id } }).then(function (dbProduct) {
      res.render("item", {
        name: dbProduct.product_name,
        image: dbProduct.image_link,
        detail: dbProduct.item_description,
        price: dbProduct.price,
        highlight: dbProduct.highlight
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
