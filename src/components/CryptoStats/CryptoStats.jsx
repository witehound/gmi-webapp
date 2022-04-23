import "./CryptoStats.css";
// import areaChart from '../../../assets/icons8-area-chart.png'
import candleSticks from "../../../assets/candlestick-chart.svg";
import Button from "../Button/Button";
import { motion} from "framer-motion";


function CryptoStats() {
  return (
    <div className="stats-div-wrap" >
      <div className="stats-div" >
        <motion.div 
          className="stats-div-left"
          initial={{ y: "100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
        >
          <div className="stats-div-left-in">
            <h1 className="stats-div-left-h1">This is WEB3, This is Crypto</h1>
            <p className="stats-div-left-p">
              A cryptocurrency is a digital currency that is created and managed
              through the use of advanced encryption techniques known as
              cryptography.
            </p>
            <p className="stats-div-left-p">
              While the number of merchants who accept cryptocurrencies has
              steadily increased, they are still very much in the minority. For
              cryptocurrencies to become more widely used, they have to first
              gain widespread acceptance among consumers.
            </p>
            <h4 className="stats-div-left-h4">
              Dont let this complexities stunt your amazing business, studio gmi
            </h4>
            <div className="button-to-more-wrap" id="button-to-more-wrap">
              <Button text={"more"} color={"white"} />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="stats-div-right"
          initial={{ y: "-100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
        >
          <div className="stats-div-right-img">
            <img
              src={candleSticks}
              alt="candle sticks chart"
              className="candle-stick-svg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CryptoStats;
