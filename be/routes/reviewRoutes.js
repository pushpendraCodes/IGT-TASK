const { Router } = require("express")
const { deleteReview,CreateReview,updateReview } = require("../controllers/reviewControllers")
const upload =  require("../middileware/multer")
const verifyToken = require("../middileware/authCheck")
const router = require("express").Router()

router.post("/create" ,verifyToken ,upload.single("review-image") , CreateReview)
router.put("/update/:id",verifyToken ,upload.single("review-image"), updateReview)
router.delete("/delete/:id",verifyToken ,upload.single("review-image"), deleteReview)

module.exports = {router}