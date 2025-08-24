import React, { useEffect, useState } from "react";
import "./News.css";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const fetchData = async () => {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=507a1c8cb025447b998f6c0bb0cca0da`
    );
    let data = await response.json();
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News2Day`;
    setArticles([]);
    fetchData();
  }, [props.category]);

  return (
    <>
      <h1
        className="text-center"
        style={{
          margin: "35px 0px",
          marginTop: "90px",
          color: "red",
        }}
      >
        News2Day - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        hasMore={articles.length !== totalResults}
        next={fetchData}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <div className="my-3">
                    <div
                      className="card"
                      style={{
                        height: "70vh",
                        backgroundColor:
                          props.mode === "light" ? "white" : "black",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      >
                        <span className="badge rounded-pill bg-danger">
                          {" "}
                          {ele.source.name}{" "}
                        </span>
                      </div>
                      <img
                        src={
                          !ele.urlToImage
                            ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                            : ele.urlToImage
                        }
                        className="card-img-top"
                        style={{ height: "30vh" }}
                        alt="..."
                      />
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{
                            color: props.mode === "light" ? "black" : "white",
                          }}
                        >
                          {ele.title}{" "}
                        </h5>
                        <p
                          className="card-text"
                          style={{
                            color: props.mode === "light" ? "black" : "white",
                          }}
                        >
                          {ele.description}
                        </p>
                        <p className="card-text" style={{ color: "red" }}>
                          <small>
                            By {!ele.author ? "Unknown" : ele.author} on{" "}
                            {new Date(ele.publishedAt).toGMTString()}
                          </small>
                        </p>
                        <Link
                          rel="noreferrer"
                          to={ele.url}
                          target="_blank"
                          className="btn btn-primary btn-position"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
