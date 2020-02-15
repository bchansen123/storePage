require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var stripe = require("stripe")("pk_test_uvD7Vwa9KENkoMIjcEK73ucs00E5DeaD4r");
var stripe = require("stripe")("sk_test_SAFuidtsHoMnOKzsSLQpuJyO00OpnZI1xK");


var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("views/images"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

//Stripe
// const stripe = require('stripe')('sk_test_SAFuidtsHoMnOKzsSLQpuJyO00OpnZI1xK');

(async () => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      name: '',
      description: '',
      images: [''],
      amount: 500,
      currency: 'usd',
      quantity: 1,
    }],
    success_url: 'main.handlebars',
    cancel_url: 'https://example.com/cancel',
  });
})();

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
