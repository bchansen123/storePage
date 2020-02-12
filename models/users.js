module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        len: [1, 140]
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        notEmpty: true,
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        notEmpty: true
      }
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        notEmpty: true
      }
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        notEmpty: true
      }
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        notEmpty: true
      }
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
        notEmpty: true
      }
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40],
        notEmpty: true
      }
    },

    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 140],
        notEmpty: true
      }
    }
  });
  return User;
};
