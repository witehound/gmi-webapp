import './NewsFooter.css'

const NewsFooter = () => {
    return(
        <div className="blockfour-footer">
        <hr className="blockfour-horizontal" />
        <div className="blockfour-footer-container">
          <div className="blockfour-footer-image">
            <img
              src={BlockFourImage}
              alt=""
              className="blockfour-footer-image-image"
            />
          </div>
          <div className="blockfour-footer-copyright">
            © Copyright 2022 Studio GMI. All Rights Reserved
          </div>
          <div className="blockfour-footer-links">
            <div className="blockfour-footer-links-linkdln">
              <a href="">
                <img
                  src={linkedin}
                  alt=""
                  className="blockfour-footer-links-linkdln-image"
                />
              </a>
            </div>
            <div className="blockfour-footer-links-twitter">
              <a href="">
                <img
                  src={twitter}
                  alt=""
                  className="blockfour-footer-links-twitter-image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default NewsFooter