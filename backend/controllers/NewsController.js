const showNews = async (req, res) => {
  try {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&${req._parsedUrl.query}&apiKey=fff828e628364a319237d0d54d127e80`
    );
    if (!response.ok) res.status(404).json({ message: "Error fetching news" });
    let data = await response.json();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { showNews };
