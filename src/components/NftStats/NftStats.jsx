import "./NftStats.css";
import nftstore from "../../../assets/nft-store-13048.svg";
import nftsblock from "../../../assets/nft-blockchain-13054.svg";
import Button from "../Button/Button";

function Hero() {
  
  return (
    <div className="nft-div" id="nft-div">
      <div className="nft-div-wrap" >
        <div className="nft-div-left" >
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
            <h1 className="-div-right-div-h1">This is WEB3, This is NFT</h1>
            <div className="nft-div-right-div-p-wrap">
              <p className="nft-div-right-div-p">
                Welcome to Studio Gmi A Digital and asset based next generation
                media consultants incorporating digital concierge services
              </p>
              <p className="nft-div-right-div-p">
                Our goal is to help businesses transition into WEB3 and Next
                generation technologies
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
