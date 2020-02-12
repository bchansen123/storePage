module.exports = function(sequelize, Sequelize) {
<<<<<<< HEAD

  var Product = sequelize.define("Product", {

=======
  var Product = sequelize.define("Product", {
>>>>>>> 593878fd413bde7677f6a52060f10657d102c4cc
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
<<<<<<< HEAD
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

=======
      allowNull: true
    },

    price: {
      type: Sequelize.DECIMAL(6,2),
      allowNull: false,
      isDecimal: true
    },

    highlight: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  });
  return Product;
};
>>>>>>> 593878fd413bde7677f6a52060f10657d102c4cc
