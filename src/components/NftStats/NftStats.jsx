import "./NftStats.css";
import nftstore from "../../../assets/nft-store-13048.svg";
import nftsblock from "../../../assets/nft-blockchain-13054.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Hero() {
  const { ref, inView } = useInView();
  const animationOne = useAnimation();
  const animationTwo = useAnimation();

  useEffect(() => {
    if (inView) {
      animationOne.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.2,
        }
      });

      animationTwo.start({
        x: 0,
        transition: {
          duration: 1,
          bounce: 0.2,
        },
      });
    }
    
    if (!inView) {
      animationOne.start({
        x: "-100vw ",
      });

      animationTwo.start({
        x: "100vw ",
      });
    }
  }, [inView]);

  return (
    <div className="nft-div">
      <div className="nft-div-wrap" ref={ref}>
        <motion.div className="nft-div-left" animate={animationOne}>
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
        </motion.div>
        <motion.div
          className="nft-div-right"
          animate={animationTwo}
        >
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
            <div className="button-to-more-wrap-nft">
              <button className="button-to-more">More</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
