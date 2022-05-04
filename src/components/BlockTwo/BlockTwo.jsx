import "./BlockTwo.css";
import blockTwoA from "../../../assets/blockTwoA.png";
import blockTwoB from "../../../assets/blockTwoB.png";
import Button from "../Button/Button";

function BlockTwo() {
  return (
    <div className="blocktwo blocktwo">
      <div className="blocktwo-container">
        <div className="blocktwo-imgone">
          <img src={blockTwoB} alt="" className="blocktwob" />
        </div>
        <div className="blocktwo-text">
          <div className="blocktwo-text-container">
            <h1 className="blocktwo-text-h1">What is the web3 opportunity?</h1>
            <div className="blocktwo-text-p-wrap">
              <p className="blocktwo-text-p">
                Web3 is the next generational leap in technology providing,
                amongst many other things, Proof of ownership, decentralised and
                transparent tran- sactions and data, streamlined/dynamic
                integration of assets and brow- sing.
              </p>
              <p className="blocktwo-text-p">
                This technology creates opportunities for new revenue streams to
                existing and new clients which can be distributed across a
                multitude of industries. Web3 is at the beginning of a new era
                in internet technology and will refine and develop over time.
                Every opportunity right now will be unique and we’d love the
                chance to discuss your personal journey into blockchain
                technology.
              </p>
            </div>
            <div className="blocktwo-text-button">
              <Button text={"Get Involved"} color={"white"} />
            </div>
          </div>
        </div>
        <div className="blocktwo-imgtwo">
          <img src={blockTwoA} alt="" className="blocktwoa" />
        </div>
      </div>
    </div>
  );
}

export default BlockTwo;
