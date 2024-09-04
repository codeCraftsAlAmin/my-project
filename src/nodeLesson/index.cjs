const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const { validate } = require("uuid");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "why is there no title? "],
    maxlength: [20, "{VALUE} isn't accpeted cause it's morethan 10"],
    minlength: [2, "{VALUE} isn't accpeted cause it's lessthan 10"],
  },
  rating: {
    type: Number,
    required: [true, "please add rating"],
    validate: {
      validator: function (value) {
        return value >= 1 && value <= 5;
      },
      message: (props) => `${props.value} is not correct`,
    },
  },
  price: {
    type: Number,
    required: [true, "please add price"],
    validate: {
      validator: function (value) {
        return value >= 10 && value <= 20000;
      },
      message: (props) => `${props.value} is not in the range`,
    },
  },
  quality: {
    type: String,
    required: [true, "set your products quality"],
  },
});

const Products = mongoose.model("products", productsSchema);

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/myproducts");
    console.log("db is connected");
  } catch (error) {
    console.log(error.message);
    console.log("db isn't connected");
  }
};

app.get("/", (req, res) => {
  res.send("Hello, This is home route");
});

app.post("/products", async (req, res) => {
  try {
    const { title, rating, price, quality } = req.body;
    const newProducts = new Products({
      title,
      rating,
      price,
      quality,
    });
    const productsData = await newProducts.save();
    res.status(201).send(productsData);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

// app.get("/products", async (req, res) => {
//   try {
//     const products = await Products.find().sort({ rating: -1 });
//     if (products) {
//       res.status(200).send({
//         success: true,
//         message: "product recieved",
//         data: products,
//       });
//     } else {
//       res.status(404).send({
//         success: false,
//         message: "product not found",
//       });
//     }
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Products.findOne({ _id: id }).select({
      title: 1,
      _id: 0,
    });
    if (products) {
      res.status(201).send({
        success: true,
        message: "got the product",
        data: products,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "proudct not found",
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const price = req.query.price;
    const rating = req.query.rating;
    let products;
    if (price && rating) {
      products = await Products.find({
        $and: [{ price: { $gt: price } }, { rating: { $gt: rating } }],
      });
    } else {
      products = await Products.find();
    }

    if (products) {
      res.status(200).send({
        success: true,
        message: "got the products",
        data: products,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "no product found",
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Products.findByIdAndDelete({ _id: id });
    if (products) {
      res.status(201).send({
        success: true,
        message: "deleted id",
        data: products,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "not data found",
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { title, price, rating, quality } = req.body;
    const products = await Products.findOneAndUpdate(
      { _id: id },
      { $set: { price, rating, title, quality } },
      { new: true }
    );
    if (products) {
      res.status(202).send({
        success: true,
        message: "product has been updated",
        data: products,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "no data found",
      });
    }
  } catch (error) {
    res.status(505).send({ message: error.message });
  }
});

app.listen(PORT, async () => {
  console.log(`http://localhost:${PORT}`);
  await connectDb();
});
