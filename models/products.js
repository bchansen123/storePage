module.exports = function(sequelize, Sequelize) {

  var Product = sequelize.define("Product", {

    category_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    department_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    image_link: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    item_description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },

    price: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      isDecimal: true,
    }
  });


  return Product;
  };

// Makes the Chirp Model available for other files (will also create a table)
