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
    },

    active_category: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  });
  return Product;
};
