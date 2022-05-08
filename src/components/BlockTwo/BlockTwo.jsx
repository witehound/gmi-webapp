import "./BlockTwo.css";
import Button from "../Button/Button";

function BlockTwo() {
  return (
    <div className="blocktwo blocktwo">
      <div className="blocktwo-container">
        <div className="blocktwo-imgone">
          <img src='https://i.ibb.co/Bqwwxcg/block-Two-B.png' alt="" className="blocktwob" />
        </div>
        <div className="blocktwo-text">
          <div className="blocktwo-text-container">
            <h1 className="blocktwo-text-h1">What is the web3 opportunity?</h1>
            <div className="blocktwo-text-p-wrap">
              <p className="blocktwo-text-p">
                Web3 is the next generational leap in technology, providing
                amongst many other things, Proof of ownership, decentralised and
                transparent transactions and data, along with
                streamlined/dynamic integration of assets and browsing.
              </p>
              <p className="blocktwo-text-p">
                This technology creates opportunities for new revenue streams to
                existing and new clients which can be distributed across a
                multitude of industries. Web3 is at the beginning of a new era
                in internet technology and will refine and develop over time.
              </p>
              <p className="blocktwo-text-p">
                Every opportunity right now will be unique and we’d love the
                chance to discuss your personal journey into blockchain
                technology.
              </p>
            </div>
            <div className="blocktwo-text-button">
            <a href="mailto:hi@studio-gmi.com"><Button text={"Reach Out"} color={"white"} /></a>
            </div>
          </div>
        </div>
        <div className="blocktwo-imgtwo">
          <img src='https://i.ibb.co/7t12HkV/block-Two-A.png' alt="" className="blocktwoa" />
        </div>
      </div>
    </div>
  );
}

export default BlockTwo;
