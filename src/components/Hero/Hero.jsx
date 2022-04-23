import "./Hero.css";
import innovative from "../../../assets/blockchain-logo-250.svg";
import Button from "../Button/Button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero-div">
      <div className="hero-div-wrap">
        <motion.div
          className="hero-div-left"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
        >
          <img
            src={innovative}
            alt="this is innovation"
            className="innovative-hero"
          />
        </motion.div>
        <motion.div
          className="hero-div-right"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
        >
          <div className="hero-div-right-div">
            <h1 className="hero-div-right-div-h1">Build. Grow. Pivot.</h1>
            <div className="hero-div-right-div-p-wrap">
              <div className="hero-div-right-div-p-wrap-container">
                <p className="hero-div-right-div-p">
                  Unlock your company or startup`s hidden growth potential with
                  us, using Blockchain. Crypto consultance company Studio gmi
                  helps you create an innovative end to end product or augment
                  your team with the right experts
                </p>
                <p className="hero-div-right-div-p">
                  Welcome to Studio Gmi A Digital and asset based next
                  generation media consultants incorporating digital concierge
                  services
                </p>
                <p className="hero-div-right-div-p">
                  Our goal is to help businesses transition into WEB3 and Next
                  generation technologies
                </p>
              </div>
            </div>
            <div className="button-to-connect-wrap">
              <Button text={"build at gmi"} color={"green"} />
            </div>
          </div>
        </motion.div>
        <div className="hero-space"></div>
      </div>
    </div>
  );
}

export default Hero;
