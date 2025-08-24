const express = require("express");
const { showNews } = require("../controllers/NewsController");
const {loginMiddleware}=require("../middlewares/AuthMiddleware");
const router = express.Router();

router.get("/news", loginMiddleware,showNews);

module.exports = router;
