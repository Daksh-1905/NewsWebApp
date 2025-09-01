const User = require("../models/UserModel");

const showNews = async (req, res) => {
  try {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&${req._parsedUrl.query}&apiKey=${process.env.NEWS_API_KEY}`
    );
    if (!response.ok) res.status(404).json({ message: "Error fetching news" });
    let data = await response.json();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const saveArticle = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.user.email });
    user.savedArticles.push(req.body);
    user.save();
    res.status(200).json({ message: "Article added succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const showSavedArticles = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.user.email });
    res.status(200).json({ data: user.savedArticles });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { showNews, saveArticle, showSavedArticles };
