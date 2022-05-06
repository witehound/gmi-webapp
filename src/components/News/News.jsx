import "./News.css";
import NewsCard from "./NewsCard/NewsCard";

function News() {
  return (
    <div className="news">
      <div className="news-container">
        <div className="news-top">
          <div className="news-top-container">
            <NewsCard newsImg={'https://i.ibb.co/k3xYYPV/newsImg1.png'} title={'Alpha Pony Society'}/>
            <NewsCard newsImg={'https://i.ibb.co/ygVDgXK/Nike.gif'} title={'Nike x RTFKT'}/>
          </div>
        </div>
        <div className="news-top">
          <div className="news-top-container">
            <NewsCard newsImg={'https://i.ibb.co/fqyGvqJ/Starbucks.jpg'} title={'StarBucks'}/>
            <NewsCard newsImg={'https://i.ibb.co/NNvVWHL/Selfridges.webp'} title={'Selfridges'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
