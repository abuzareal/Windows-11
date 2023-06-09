import React, { useEffect, useState } from "react";
import "./News.scss";
import axios from "axios";
import gif from "https://media.giphy.com/media/RgzryV9nRCMHPVVXPV/giphy.gif";

const News = () => {
  const [news, setNews] = useState([]); // Add a new state variable, "news", to the component
  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: "GET",
        url: "https://newsdata2.p.rapidapi.com/sources",
          params: {
              language: "en",
              country: "US",
                category: "Technology",
          },
        headers: {
          "X-RapidAPI-Key":
            "4e8a29ced8msh70ccb8b4c63f94ep157a4cjsnddad9329e7ab",
          "X-RapidAPI-Host": "newsdata2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setNews(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <>
      <div className="news-container">
        <h2>News Feed 📰</h2>
        <hr />
        {news ? (
          news.map((newsItem: any) => (
            <div className="news-item" key={newsItem.id}>
              <h3>
                <span id="title">{newsItem.name}</span>
                <span id="author">{newsItem.id}</span>
              </h3>
              <hr />
              <p>{newsItem.description}</p>
              <a href={newsItem.url} target="_blank" rel="noreferrer">
                {" "}
                Read More{" "}
              </a>
            </div>
          ))
        ) : (
                      <p>
                          There are no news
          </p>
        )}
        <div className="news-footer-shadow"></div>
      </div>
    </>
  );
};

export default News;
