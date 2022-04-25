import "./Hero.css";
import innovative from "../../../assets/block 1.svg";
import web3ready from "../../../assets/gmi_Black_Portrait copy.svg";
import Button from "../Button/Button";

function Hero() {
  return (
    <div className="hero-div">
      <div className="hero-div-wrap">
        <div className="hero-div-left">
          <img
            src={innovative}
            alt="this is innovation"
            className="innovative-hero"
          />
        </div>
        <div className="hero-div-right">
          <div className="hero-div-right-div">
          <div className="space-hero-hero">
                        
          </div>
            <h1 className="hero-div-right-div-h1">
              Getting Businesses web3 Ready.
            </h1>
            <div className="hero-div-right-div-p-wrap">
              <div className="hero-div-right-div-p-wrap-container">
                <p className="hero-div-right-div-p">
                  Studio GMI offers a full 360° suite to its clients. From
                  consultative training, design, build and integration within
                  web3 and blockchain technologies to marketing, partnerships
                  and after sales service.Studio GMI offers a full 360° suite to
                  its clients. From consultative training, design, build and
                  integration within web3 and blockchain technologies to
                  marketing, partnerships and after sales service.
                </p>
                <p className="hero-div-right-div-p">
                  Let us guide you through the maze that is blockchain
                  technologies to create and strategize an effective way for
                  your business to enter the world of web3.
                </p>
                <p className="hero-div-right-div-p">
                  Our goal is to help businesses transition into WEB3 and Next
                  generation technologies
                </p>
              </div>
            </div>
            <div className="button-to-connect-wrap">
              <Button text={<img className="button-to-connect-wrap-img" src={web3ready}/>} color={"green"} />
            </div>
          </div>
        </div>
        <div className="hero-space"></div>
      </div>
    </div>
  );
}

export default Hero;
