import "./Copyright.css";
import candleSticks from "../../../assets/gmi_Black_Portrait copy.svg";
import logo from "../../../assets/gmi-_Green_Symbol.svg";
import nameImg from "../../../assets/gmi-_Wordmark_Black.svg";
import web3ready from '../../../assets/gmi_Black_Portrait copy.svg'
import twitter from '../../../assets/twitter-logo.svg'
import linkedin from '../../../assets/linkedin.svg'


function Copyright() {
  return (
    <div className="copy-right-div">
      <div className="copy-right-div-top">
        <div className="copy-right-div-top-logo">
          <img src={logo} className="copy-right-div-top-logo-img"/>
          <img src={nameImg}  className="copy-right-div-top-logo-img"/>
          <img src={web3ready} alt="web3 ready" className='copy-right-div-top-logo-img'/>
        </div>
        <img
          src={candleSticks}
          alt="candle sticks chart"
          className="copy-right-div-img"
        />
        <a href="mailto: Hi@studio-gmi.com">
          <div className="copy-right-div-at">Contact @GMI_STUDIOS</div>
        </a>
      </div>
      <div className="copy-right-div-top-socials">
        <a
          href="https://mobile.twitter.com/studio_gmi"
          className="copy-right-div-top-socials-twitter"
        >
        <img src={twitter} alt="" className="the-twitter-logo"  />
        <div className="social-space">        </div>
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/company/studiogmi"
          className="copy-right-div-top-socials-linkdln"
        >
        <img src={linkedin} alt="" className="the-linkedin-logo"  />
        <div className="social-space">        </div>
          Linkedin
        </a>
      </div>
      <div className="copy-right-div-bottom">
        Privacy © Copyright 2022 Studio GMI. All Rights Reserved
      </div>
    </div>
  );
}

export default Copyright;
