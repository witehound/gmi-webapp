import "./BlockOne.css";
import blockOneA from "../../../assets/blockOneA.jpg";
import blockOneB from "../../../assets/blockOneB.jpg";
import Button from "../Button/Button";

function BlockOne() {
  return (
    <div className="blockone blockone">
      <div className="blockone-container">
        <div className="blockone-imgone">
          <img src={blockOneA} alt="" className="blockonea" />
        </div>
        <div className="blockone-text">
          <div className="blockone-text-container">
            <h1 className="blockone-text-h1">Getting Businesses web3 Ready.</h1>
            <div className="blockone-text-p-wrap">
              <p className="blockone-text-p">
                tudio GMI offers a full 360° suite to its clients. From
                consultative training, design, build and integration within web3
                and blockchain technologies to marketing, partnerships and after
                sales service.Studio GMI offers a full 360° suite to its
                clients. From consultative training, design, build and
                integration within web3 and block- chain technologies to
              </p>
              <p className="blockone-text-p">
                Let us guide you through the maze that is blockchain
                technologies to create and strategize an effective way for your
                business to enter the world of web3
              </p>
              <p className="blockone-text-p">
                Our goal is to help businesses transition into WEB3 and Next
                generation technologies
              </p>
            </div>
            <div className="blockone-text-button">
              <Button text={"Get Involved"} color={"white"} />
            </div>
          </div>
        </div>
        <div className="blockone-imgtwo">
          <img src={blockOneB} alt="" className="blockoneb" />
        </div>
      </div>
    </div>
  );
}

export default BlockOne;
