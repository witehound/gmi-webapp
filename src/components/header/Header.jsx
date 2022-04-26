import "./Header.css";
import nameImg from "../../../assets/gmi-_Wordmark_Black.svg";
import logo from "../../../assets/gmi-_Green_Symbol.svg";
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
                <img src={logo} alt="gmi-logo" className="gmi-header-logo" />
                <img
                  src={nameImg}
                  alt="gmi-logo"
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
