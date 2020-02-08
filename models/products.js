var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


var Product = sequelize.define("product", {

  category_id: {
    type: Sequelize.Integer,
    allowNull: false,
    validate: {
      len: [1, 140]
    }
  },

  product_name: {
    type: Sequelize.String,
    allowNull: false,
    validate: {
      len: [1, 140]
    }
  },

  department_name: {
    type: Sequelize.String,
    allowNull: false,
    validate: {
      len: [1, 140]
    }
  },

  image_link: {
    type: Sequelize.String,
    allowNull: false,
    validate: {
      len: [1, 140]
    }
  },

  price: {
    type: Sequelize.Decimal,
    allowNull: false,
    isDecimal: true,
  }
});


Product.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Product;
