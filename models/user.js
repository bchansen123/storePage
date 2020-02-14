// var bcrypt = require("bcryptjs"); //password hashing

//creating user model
module.exports = function(sequelize, Datatypes) {
  var User = sequelize.define("User", {
    email: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: Datatypes.STRING,
      allowNull: false
    }
  });

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  //   User.hook("beforeCreate", function(user) {
  //     user.password = bcrypt.hashSync(
  //       user.password,
  //       bcrypt.genSaltSync(10),
  //       null
  //     );
  //   });
  //   return User;
  User.beforeCreate(function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
}; //
//This is a fix by Samaila Philemon Bala in case you want to use ES6
//and the above is not working
