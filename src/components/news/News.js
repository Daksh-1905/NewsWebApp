import React, { useEffect, useState } from "react";
import "./News.css";

const News = () => {
  const [myNews, setMyNews] = useState([]);

  const fetchData = async () => {
    let response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=fff828e628364a319237d0d54d127e80"
    );
    let data = await response.json();
    setMyNews(data.articles);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mainDiv">
        {myNews.map((ele) => {
          console.log(ele);
          return (
            <>
              <div className="card" style={{ width: "18rem" , height: "27rem" , alignItems:"center" , justifyContent:"center" , marginLeft:"4.3rem" , marginBottom:"2.3rem"}}>
                <img src={ele.urlToImage == null ? "https://play-lh.googleusercontent.com/wDNrcJC7orAh6in6U-LF8UNTnC5dpGloYLpZc8TFODPiyoJb6LEEY4X9bBfAZ9nWWg=w240-h480-rw" : ele.urlToImage} className="card-img-top img-size" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ele.author}</h5>
                  <p className="card-text">{ele.title}</p>
                  <a href={ele.url} target="_blank" className="btn btn-primary btn-position">
                    Read More
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default News;
