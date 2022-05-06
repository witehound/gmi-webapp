import "./NewsCard.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function NewsCard({ newsImg, title }) {
  return (
    <div className="newscard">
      <div className="newscard-container">
        <div className="newscard-top">
          <img src={newsImg} alt="" className="newscard-top-img" />
        </div>
        <div className="newscard-bottom">
          <div className="newscard-bottom-left">
            <div className="newscard-bottom-left-wrap">
              <div className="newscard-bottom-left-h1-wrap">
                <h1 className="newscard-bottom-left-h1">{title}</h1>
              </div>
              <div className="newscard-bottom-left-p-wrap">
                <p className="newscard-bottom-left-p">
                  Real life utility and web3 integration.
                </p>
                <p className="newscard-bottom-left-p">
                  Your unique Alpha Pony is your pass into our virtual community
                  that owns a, real life racing club - The Alpha Pony Racing
                  Club.
                </p>
                <p className="newscard-bottom-left-p">
                  Earn passive income from race winnings, studs and sales, for
                  life and be part of the next big digital community in the form
                  of ENFT.
                </p>
              </div>
            </div>
          </div>
          <div className="newscard-bottom-right newscard-bottom-left-p">
            {" "}
            <div className="newscard-bottom-right-inner">
              read more <ArrowRightIcon style={{ fill: "#27d87f" }} />{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
