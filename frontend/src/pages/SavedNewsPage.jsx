import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const SavedNewsPage = () => {
  const navigate = useNavigate();
  const [savedArticles, setSavedArticles] = useState([]);
  const fetchData = async () => {
    try {
      let response = await fetch(`/api/saveArticle`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) {
        navigate("/login");
        return;
      }
      let data = await response.json();
      setSavedArticles(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveArticle = async () => {
    try {
      let response = await fetch("/api/saveArticle", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) {
        navigate("/login");
        return;
      }
      alert("Article unsaved successfully");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Saved Articles - NewsHub";
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="text-center text-2xl font-bold my-20 text-blue-500">
        Saved Articles
      </h1>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {savedArticles.map((ele) => (
            <div key={ele.url} className="w-full">
              <div className="relative rounded overflow-hidden shadow-lg h-[70vh] flex flex-col">
                <div className="absolute top-2 right-2">
                  <span className="inline-block bg-red-600 text-white rounded-full px-2 py-1 text-xs">
                    {ele.source?.name}
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
                    <h5 className="text-xl font-semibold mb-2">{ele.title}</h5>
                    <p className="text-sm mb-3">{ele.description}</p>
                  </div>

                  <div>
                    <p className="text-sm mb-3 text-red-500">
                      <small>
                        By {!ele.author ? "Unknown" : ele.author} on{" "}
                        {new Date(ele.publishedAt).toGMTString()}
                      </small>
                    </p>
                    <div className="flex justify-between">
                      <a
                        rel="noreferrer"
                        href={ele.url}
                        target="_blank"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                      >
                        Read More
                      </a>
                      <button
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                        onClick={() => {
                          handleSaveArticle(ele);
                        }}
                      >
                        Unsave Article
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SavedNewsPage;
