const reviewModel = require("../models/reviewModel")
const CreateReview = async (req, res) => {
  try {
    const { rating, title } = req.body;
    const image = req.file.filename;
    console.log(image,"image")
    const review = new reviewModel({
      image: image,
      title: title,
      rating: rating,
    });

    await review.save();
    res.status(201).json({
      message: "review added",
      review: review,
      status: "ok",
    });
  } catch (error) {
    console.error("Error ", error);
    res.status(500).json({ message: error.message, error: error.message });
  }
};
const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, rating } = req.body;
    const updateFields = { title, rating };
    if (req.file) {
      updateFields.profileImage = req.file.filename;
    }

    const updatedDocument = await reviewModel.findByIdAndUpdate(
      id,
      updateFields
    );

    if (!updatedDocument) {
      return res.status(404).json({ message: "Document not found." ,status:false  });
    }

    res.json({ message: "Document updated successfully",status:true, updateFields });
  } catch (error) {
    console.error("Error ", error);
    res.status(500).json({ message: error.message,status:false, error: error.message });
  }
};
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;


    const deletedDocument = await reviewModel.findByIdAndDelete(id)
    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found." });
    }
    res.json({ message: "Document deleted successfully", status:true });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: error.message,status:false, error: error.message });
  }
};

module.exports = { CreateReview, updateReview, deleteReview };
