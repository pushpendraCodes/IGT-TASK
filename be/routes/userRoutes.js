const { Router } = require("express")
const { CreateUser,loginUser } = require("../controllers/userControllers")

const router = require("express").Router()

router.post("/create" , CreateUser)
router.post("/login" , loginUser)

module.exports = {router}