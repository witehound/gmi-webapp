import "./Copyright.css";
import candleSticks from "../../../assets/gmi_Black_Portrait copy.svg";

function Copyright() {
  return (
    <div className="copy-right-div">
      <div className="copy-right-div-top">
        <img
          src={candleSticks}
          alt="candle sticks chart"
          className="copy-right-div-img"
        />
        <a href="mailto: Hi@studio-gmi.com">
          <div className="copy-right-div-at">Contact @GMI_STUDIOS</div>
        </a>
      </div>
      <div className="copy-right-div-bottom">
        Privacy © Copyright 2022 Studio GMI. All Rights Reserved
      </div>
    </div>
  );
}

export default Copyright;
