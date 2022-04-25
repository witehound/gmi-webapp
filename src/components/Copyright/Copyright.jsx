import "./Copyright.css";
import web3ready from "../../../assets/web3ready.svg";
import logo from "../../../assets/gmi-_Original_joined.svg";
import twitter from '../../../assets/twitter-logo.svg'
import linkedin from '../../../assets/linkedin.svg'


function Copyright() {
  return (
    <div className="copy-right-div">
      <div className="copy-right-div-top">
        <div className="copy-right-div-top-logo">
          <img src={logo} className="copy-right-div-top-logo-img"/>
        </div>
        <div className="copy-right-div-img-web3">
          <img
          src={web3ready}
          alt="candle sticks chart"
          className="copy-right-div-img"
        />
        </div>
        <a href="mailto: Hi@studio-gmi.com">
          <div className="copy-right-div-at">Get in Touch</div>
        </a>
      </div>
      <div className="copy-right-div-top-socials">
        <a
          href="https://mobile.twitter.com/studio_gmi"
          className="copy-right-div-top-socials-twitter"
        >
        <img src={twitter} alt="" className="the-twitter-logo"  />
        </a>
        <a
          href="https://www.linkedin.com/company/studiogmi"
          className="copy-right-div-top-socials-linkdln"
        >
        <img src={linkedin} alt="" className="the-linkedin-logo"  />
        </a>
      </div>
      <div className="copy-right-div-bottom">
        © Copyright 2022 Studio GMI. All Rights Reserved
      </div>
    </div>
  );
}

export default Copyright;
