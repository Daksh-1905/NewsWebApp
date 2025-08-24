import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import { useLocation } from "react-router-dom";

const AllNewsPage = (props) => {
  const location = useLocation();
  const token = location.state;
  console.log(token);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const fetchData = async () => {
    try {
      let response = await fetch(
        `http://localhost:8080/api/news?category=${props.category}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          // credentials:'include'
        }
      );
      let data = await response.json();
      console.log("Data", data);
      setArticles(articles.concat(data.data.articles));
      setTotalResults(data.data.totalResults);
    } catch (error) {}
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News2Day`;
    setArticles([]);
    fetchData();
  }, [props.category]);

  return (
    <>
      <h1
        className="text-center text-2xl font-bold"
        style={{ margin: "35px 0px", marginTop: "90px", color: "red" }}
      >
        News2Day - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        hasMore={articles.length !== totalResults}
        next={fetchData}
        loader={<Spinner />}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((ele) => (
              <div key={ele.url} className="w-full">
                <div
                  className="relative rounded overflow-hidden shadow-lg h-[70vh] flex flex-col"
                  style={{
                    backgroundColor:
                      props.mode === "light" ? "white" : "#0f172a",
                  }}
                >
                  <div className="absolute top-2 right-2">
                    <span className="inline-block bg-red-600 text-white rounded-full px-2 py-1 text-xs">
                      {/* {ele.source?.name} */}
                    </span>
                  </div>

                  <img
                    src={
                      !ele.urlToImage
                        ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                        : ele.urlToImage
                    }
                    className="w-full h-60 object-cover"
                    alt={ele.title || "news"}
                  />

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h5
                        className="text-xl font-semibold mb-2"
                        style={{
                          color: props.mode === "light" ? "black" : "white",
                        }}
                      >
                        {ele.title}
                      </h5>
                      <p
                        className="text-sm mb-3"
                        style={{
                          color: props.mode === "light" ? "black" : "white",
                        }}
                      >
                        {ele.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm mb-3 text-red-500">
                        <small>
                          By {!ele.author ? "Unknown" : ele.author} on{" "}
                          {new Date(ele.publishedAt).toGMTString()}
                        </small>
                      </p>
                      <a
                        rel="noreferrer"
                        href={ele.url}
                        target="_blank"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default AllNewsPage;
