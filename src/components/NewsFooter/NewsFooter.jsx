import "./NewsFooter.css";
import newsFooterLogo from "../../../assets/newsfooterlogo.png";
import newsFooterLinkedIn from "../../../assets/newsfooterlinkedin.png";
import newsFooterTwitter from "../../../assets/newsfootertwitter.png";

const NewsFooter = () => {
  return (
    <div className="newsfooter">
      <div className="newsfooter-container">
        <div className="newsfooter-image">
          <img src={newsFooterLogo} alt="" className="newsfooter-image-image" />
        </div>
        <div className="newsfooter-copyright">
          © Copyright 2022 Studio GMI. All Rights Reserved
        </div>
        <div className="newsfooter-links">
          <div className="newsfooter-links-wrap">
            <div className="newsfooter-links-linkdln">
              <a href="https://www.linkedin.com/company/studiogmi/" target="_blank">
                <img
                  src={newsFooterLinkedIn}
                  alt=""
                  className="newsfooter-links-linkdln-image"
                />
              </a>
            </div>
            <div className="newsfooter-links-twitter">
              <a href="https://twitter.com/studio_gmi" target="_blank">
                <img
                  src={newsFooterTwitter}
                  alt=""
                  className="newsfooter-links-twitter-image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFooter;
