import "./News.css";
import NewsCard from "./NewsCard/NewsCard";
import newsImgOne from "../../../assets/newsImg1.png";
// import newsImgTwo from "../../../assets/nike.gif"
import newsImgThree from "../../../assets/starbucks.jpeg"
import newsImgFour from "../../../assets/selfridges.webp"

function News() {
  return (
    <div className="news">
      <div className="news-container">
        <div className="news-top">
          <div className="news-top-container">
            <NewsCard newsImg={newsImgOne} title={'Alpha Pony Society'}/>
            <NewsCard newsImg={newsImgOne} title={'Nike x RTFKT'}/>
          </div>
        </div>
        <div className="news-top">
          <div className="news-top-container">
            <NewsCard newsImg={newsImgThree} title={'StarBucks'}/>
            <NewsCard newsImg={newsImgFour} title={'Selfridges'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
