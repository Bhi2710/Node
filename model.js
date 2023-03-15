const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
      type: String,
    },
    price:{
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("product", productSchema);

