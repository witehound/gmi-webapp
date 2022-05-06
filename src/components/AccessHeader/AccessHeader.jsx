import "./AccessHeader.css";
import ReactPlayer from "react-player"

function AccessHeader() {
  return (
    <div className="access-header">
      <div className="access-header-container">
        <div className="access-header-top">
          <div className="access-header-top-left">
            <div className="access-header-top-left-text">
              <div className="access-header-top-left-text-h1-wrap">
                <h1 className="access-header-top-left-text-h1">
                  We want every business to be{" "}
                  <span className="access-header-top-left-text-h1-span">
                    web3 ready.
                  </span>
                </h1>
              </div>
              <div className="access-header-top-left-text-p-wrap">
                <p className="access-header-top-left-text-p">
                  The inclusion of web3 to the business world is going to be a
                  matter of when, not if. We’re here to guide you through the
                  initial steps of preparing your business for this addition in
                  future technology
                </p>
                <p className="access-header-top-left-text-p">
                  Being a part of web3 allows you to find additional customers,
                  generate a new revenue stream and take market share from your
                  competitors by being a market innovator.
                </p>
              </div>
            </div>
          </div>
          <div className="access-header-top-right">
            <div className="access-header-top-right-video">
              <ReactPlayer
                 url="https://vimeo.com/707014469"
                 controls
              />
            </div>
          </div>
        </div>
        <div className="access-header-bottom">bottom</div>
      </div>
    </div>
  );
}

export default AccessHeader;
