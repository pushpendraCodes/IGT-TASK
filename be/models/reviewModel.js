const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    image: { type: String ,require:true},
    rating: { type: Number, require: true },
    title: { type: String, require: true },
    watching:{type:Number ,default:1}
  },
  { timestamps: true }
);

const reviewModel = mongoose.model("reviewModel" , reviewSchema)
module.exports = reviewModel