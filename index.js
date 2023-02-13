const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config();

let app = express();
app.use(cors());
app.options('*', cors());


app.use("/shop", require("./Route/Shop.route"));
app.use("/user", require("./Route/User.route"));
app.use("/comment", require("./Route/Comment.route"));
app.use("/order", require("./Route/Order.route"));
app.use("/voucher", require("./Route/Voucher.route"));
app.use("/uploads", require("./Route/upload.route"));
app.use("/auth", require("./Route/Authentication.route"));
app.use("/wishlist", require("./Route/Wishlist.route"));
app.use("/attribute", require("./Route/Attribute.route"));
app.use("/product", require("./Route/Product.route"));
app.use("/category", require("./Route/Category.route"));
app.use("/characteristic", require("./Route/Characteristic.route"));
app.use(
  "/characteristic-product",
  require("./Route/CharacteristicProduct.route")
);

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
