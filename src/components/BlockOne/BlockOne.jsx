import "./BlockOne.css";
import Button from "../Button/Button";

function BlockOne() {
  return (
    <div className="blockone blockone">
      <div className="blockone-container">
        <div className="blockone-imgone">
          <img src='https://i.ibb.co/WzTCzpc/block-One-A.jpg' alt="" className="blockonea" />
        </div>
        <div className="blockone-text">
          <div className="blockone-text-container">
            <h1 className="blockone-text-h1">Getting Businesses web3 Ready.</h1>
            <div className="blockone-text-p-wrap">
              <p className="blockone-text-p">
                At Studio GMI, we offer a full 360° suite of web3 and blockchain
                technologies. From consultative training, design, build and
                integration to marketing, partnerships and after sales service.
                Web3 technology will be a huge addition to the current
                technological space, by getting in early you’ll find your
                business will find new customers, generate a new revenue stream
                and take market share from your competitors.
              </p>
              <p className="blockone-text-p">
                Let us guide you through the maze that is blockchain
                technologies to create and strategize an effective way for your
                business to enter the world of web3.
              </p>
              <p className="blockone-text-p">
                Our goal is to help businesses transition into WEB3 and Next
                generation technologies.
              </p>
            </div>
            <div className="blockone-text-button">
              <Button text={"Get Involved"} color={"white"} />
            </div>
          </div>
        </div>
        <div className="blockone-imgtwo">
          <img src='https://i.ibb.co/b5cnTvK/block-One-B.png' alt="" className="blockoneb" />
        </div>
      </div>
    </div>
  );
}

export default BlockOne;
