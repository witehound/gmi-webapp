import "./NftStats.css";
import nftstore from "../../../assets/nft-store-13048.svg";
import nftsblock from "../../../assets/nft-blockchain-13054.svg";
import Button from "../Button/Button";

function Hero() {
  return (
    <div className="nft-div" id="nft-div">
      <div className="nft-div-wrap">
        <div className="nft-div-left">
          <div className="nft-div-left-in-top">
            <div className="nft-div-left-top">
              <img
                src={nftstore}
                alt="this is innovation"
                className="nft-nft-img"
              />
            </div>
          </div>
          <div className="nft-div-left-in-bottom">
            <div className="nft-div-left-bottom">
              <img
                src={nftsblock}
                alt="this is innovation"
                className="nft-nft-img"
              />
            </div>
          </div>
        </div>
        <div className="nft-div-right">
          <div className="nft-div-right-div">
            <h1 className="-div-right-div-h1">So, what is the metaverse?</h1>
            <div className="nft-div-right-div-p-wrap">
              <p className="nft-div-right-div-p">
                While web3 is mainly about who will own and control tomorrow’s
                internet, the metaverse centres on user’s experience.
              </p>
              <p className="nft-div-right-div-p">
                Currently, most of us navigate websites and apps through the
                screens of computers, smartphones, and tablets. Metaverse
                proponents suggest we’ll use virtual reality (VR) tech to enter
                the internet tomorrow, moving between virtual worlds in the form
                of digital avatars
              </p>
              <p className="nft-div-right-div-p">
                The global market for the Metaverse in 2020 was valued at
                US$107.1 Billion and is projected to reach US$758.6 Billion by
                2026.The global market for the Metaverse in 2020 was valued at
                US$107.1 Billion and is projected to reach US$758.6 Billion by
                2026.
              </p>
            </div>
            <div className="space-nft"></div>
            <div className="nft-div-right-div-button">
              <Button text={"Build at gmi"} color={"green"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
