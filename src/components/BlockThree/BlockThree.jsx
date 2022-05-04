import "./BlockThree.css";
import Button from "../Button/Button";
import blockThreeA from "../../../assets/A.png"
import blockThreeB from '../../../assets/B.png'

function BlockThree() {
  return (
    <div className="blockthree blockthree">
      <div className="blockthree-container">
        <div className="blockthree-imgone">
          <img src={blockThreeA} alt="" className="blockthreeb" />
        </div>
        <div className="blockthree-text">
          <div className="blockthree-text-container">
            <h1 className="blockthree-text-h1">So, what is the metaverse?</h1>
            <div className="blockthree-text-p-wrap">
              <p className="blockthree-text-p">
                While web3 is mainly about who will own and control tomorrow’s
                internet, the metaverse centres on user’s experience.
              </p>
              <p className="blockthree-text-p">
                Currently, most of us navigate websites and apps through the
                screens of computers, smartphones, and tablets. Metaverse propo-
                nents suggest we’ll use virtual reality (VR) tech to enter the
                internet tomorrow, moving between virtual worlds in the form of
                digital ava- tars
              </p>
              <p className="blockthree-text-p">
                The global market for the Metaverse in 2020 was valued at
                US$107.1 Billion and is projected to reach US$758.6 Billion by
                2026.The global market for the Metaverse in 2020 was valued at
                US$107.1 Billion and is projected to reach US$758.6 Billion by
                2026
              </p>
            </div>
            <div className="blockthree-text-button">
              <Button text={"Get Involved"} color={"white"} />
            </div>
          </div>
        </div>
        <div className="blockthree-imgtwo">
          <img src={blockThreeB} alt="" className="blockthreea" />
        </div>
      </div>
    </div>
  );
}

export default BlockThree;
