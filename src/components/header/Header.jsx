import "./Header.css";
import { Link } from "react-router-dom";

function Header({
  isMetaMask,
  account,
  connectWallet,
  setConnectingWallet,
  accoutAddress,
  ethereum,
}) {
  const loadConnectWallet = async () => {
    if (!ethereum) return;
    setConnectingWallet(true);
    connectWallet();
    if (account) {
      setConnectingWallet(false);
    } else {
      setTimeout(() => {
        setConnectingWallet(false);
      }, 15000);
      return;
    }
  };

  return (
    <div className="header-div-wrap">
      <div className="header-div">
        <div className="header-div-inner">
          <div className="header-wrap">
            <div className="header-right">
              <div className="header-left">
                <img src="https://i.ibb.co/jGWbHV3/O9q55-U-Fz-Hya-Ofip-O3enz-KT40-Qs5-LQI27yya-HXU5-ETANIk-TAvv-P74-CZf9-INRAATV8qw-w1200-h630-p.png" className="gmi-header-logo" />
                <img
                  src="https://i.ibb.co/4S2F4WM/15dc352-YUx-D2pka-Yo-XRVx-XVq-UFfyuky-Ob257m-Jsuiud-NAVw1-E5s2t-VHim-Ov-OAwotk-I-w1200-h630-p.png"
                  className="header-left-title"
                />
              </div>
              {account && (
                <div className="header-right-connect-wrap">
                  <Link to="/web3">
                    <div className="header-right-connect">
                      <div>Welcome</div>
                    </div>
                  </Link>
                </div>
              )}
              <div className="header-right-connect-wrap">
                <div
                  className="header-right-connect"
                  onClick={loadConnectWallet}
                >
                  {!account ? (
                    <div>{isMetaMask ? "Connect" : "Install MetaMask"}</div>
                  ) : (
                    <div>{accoutAddress}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
