import { useEffect, useState } from "react";
import "./News.scss";
import { gif } from "../../data/images";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  type News = {
    id: string;
    name: string;
    url: string;
    description: string;
  };

  useEffect(() => {
    const fetchNews = async () => {
      const url =
        "https://api.newsdata.io/v1/news?apikey=YOUR_API_KEY&q=technology";

      try {
        const response = await axios.get<News[]>(url, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(response.data);
        setNews(response.data);
        setIsLoading(false); // Set loading state to false after fetching news
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Set loading state to false if an error occurs
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>News Feed 📰</h2>
      <hr />
      {isLoading ? (
        <p>
          <img
            src={gif}
            alt=""
            style={{
              width: "100px",
            }}
          />
        </p>
      ) : news.length > 0 ? (
        news.map((newsItem) => (
          <div className="news-item" key={newsItem.id}>
            <h3>
              <span id="title">{newsItem.name}</span>
              <span id="author">{newsItem.id}</span>
            </h3>
            <hr />
            <p>{newsItem.description}</p>
            <a href={newsItem.url} target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        ))
      ) : (
        <p>There are no news</p>
      )}
      <div className="news-footer-shadow"></div>
    </div>
  );
};

export default News;
