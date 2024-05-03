const express = require("express")
const ShoesController = require("../controller/S")
const router = express.Router()

router.post("/",ShoesController.create)
router.get("/",ShoesController.getAll)