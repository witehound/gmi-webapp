import "./AccessHeader.css";

function AccessHeader() {
  return (
    <div className="access-header">
      <div className="access-header-container">
        <div className="access-header-top">
          <div className="access-header-top-left">
            <div className="access-header-top-left-text">
              <div className="access-header-top-left-text-h1-wrap">
                <h1 className="access-header-top-left-text-h1">
                  We are willing to make any business{" "}
                  <span className="access-header-top-left-text-h1-span">
                    web3 ready.
                  </span>
                </h1>
              </div>
              <div className="access-header-top-left-text-p-wrap">
                <p className="access-header-top-left-text-p">
                  Real life utility and web3 integration.
                </p>
                <p className="access-header-top-left-text-p">
                  Your unique Alpha Pony is your pass into our virtual community
                  that owns a, real life racing club - The Alpha Pony Racing
                  Club.
                </p>
                <p className="access-header-top-left-text-p">
                  Earn passive income from race winnings, studs and sales, for
                  life and be part of the next big digital community in the form
                  of ENFT...
                </p>
              </div>
            </div>
          </div>
          <div className="access-header-top-right">
            <div className="access-header-top-right-video">video</div>
          </div>
        </div>
        <div className="access-header-bottom">bottom</div>
      </div>
    </div>
  );
}

export default AccessHeader;
