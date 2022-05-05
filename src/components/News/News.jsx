import "./News.css";
import NewsCard from "./NewsCard/NewsCard";

function News() {
  return (
    <div className="news">
      <div className="news-container">
        <div className="news-top">
          <div className="news-top-container">
            <NewsCard />
            <NewsCard />
          </div>
        </div>
        <div className="news-top">
          <div className="news-top-container">
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
