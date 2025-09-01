const express = require("express");
const { showNews, saveArticle, showSavedArticles } = require("../controllers/NewsController");
const { loginMiddleware } = require("../middlewares/AuthMiddleware");
const router = express.Router();

router.get("/news", loginMiddleware, showNews);
router.post("/saveArticle", loginMiddleware, saveArticle);
router.get('/saveArticle',loginMiddleware,showSavedArticles)
module.exports = router;
