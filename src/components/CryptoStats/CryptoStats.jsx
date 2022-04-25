import "./CryptoStats.css";
import web3ready from "../../../assets/Block 2.svg";
import Button from "../Button/Button";

function CryptoStats() {
  return (
    <div className="stats-div-wrap" id="stats-div-wrap">
      <div className="stats-div">
        <div className="stats-div-left">
          <div className="stats-div-left-in">
            <h1 className="stats-div-left-h1">
              What is the web3 opportunity?
            </h1>
            <p className="stats-div-left-p">
              Web3 is the next generational leap in technology providing,
              amongst many other things, Proof of ownership, decentralised and
              transparent transactions and data, streamlined/dynamic integration
              of assets and browsing.
            </p>
            <p className="stats-div-left-p">
              This technology creates opportunities for new revenue streams to
              existing and new clients which can be distributed across a
              multitude of industries.
            </p>
            <h4 className="stats-div-left-p">
              Web3 is at the beginning of a new era in internet technology and
              will refine and develop over time. Every opportunity right now
              will be unique and we’d love the chance to discuss your personal
              journey into blockchain technology.
            </h4>
            <div className="button-to-more-wrap" id="button-to-more-wrap">
              <Button text={"Build at gmi"} color={"white"} />
            </div>
          </div>
        </div>
        <div className="stats-div-right">
          <div className="stats-div-right-img">
            <img
              src={web3ready}
              alt="candle sticks chart"
              className="candle-stick-svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoStats;
