import "./NewsCard.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function NewsCard({ newsImg, title, p1, p2, p3,link }) {
  return (
    <div className="newscard">
      <div className="newscard-container">
        <div className="newscard-top">
          <img src={newsImg} alt="" className="newscard-top-img" />
          <div className="testing-grey">{" "}</div>
        </div>
        <div className="newscard-bottom">
          <div className="newscard-bottom-left">
            <div className="newscard-bottom-left-wrap">
              <div className="newscard-bottom-left-h1-wrap">
                <h1 className="newscard-bottom-left-h1">{title}</h1>
              </div>
              <div className="newscard-bottom-left-p-wrap">
                <p className="newscard-bottom-left-p">
                  {p1}
                </p>
                <p className="newscard-bottom-left-p">
                  {p2}
                </p>
                <p className="newscard-bottom-left-p">
                  {p3}
                </p>
              </div>
            </div>
          </div>
          <div className="newscard-bottom-right newscard-bottom-left-p">
            {" "}
            <div className="newscard-bottom-right-inner">
             <a href={link} target='_blank' className="newscard-bottom-right-inner">read more <ArrowRightIcon style={{ fill: "#27d87f" }} />{" "}</a> 
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
