import "./Header.css";
import nameImg from "../../../assets/gmi-_Wordmark_Black.svg";
import logo from "../../../assets/gmi-_Green_Symbol.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import { useState } from "react";
import NavBarOptions from "../NavBarOptions/NavBarOptions";

function Header({
  isMetaMask,
  account,
  connectWallet,
  setConnectingWallet,
  accoutAddress,
  ethereum
}) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const navbarworks = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  const loadConnectWallet = async () => {
    if(!ethereum) return
    setConnectingWallet(true)
    connectWallet();
    if (account){
      setConnectingWallet(false)
    }else{
      setTimeout(()=>{setConnectingWallet(false)},15000)
      return
    }
    
  };

  return (
    <div
      className={`header-div-wrap ${
        isNavBarOpen ? `header-div-wrap-ststic` : ""
      }`}
    >
      <div className="header-div">
        <div className="header-div-inner">
          <div className="header-wrap">
            <div className="header-left">
              <img src={logo} alt="gmi-logo" className="gmi-header-logo" />
              <img src={nameImg} alt="gmi-logo" className="header-left-title" />
            </div>

            <div className="header-right">
              <div className="header-right-crypto">
                <a href="#stats-div-wrap">
                  <div className="header-right-welcome-text">CRYPTO</div>
                </a>
              </div>
              <div className="header-right-nft">
                <a href="#nft-div">
                  <div className="header-right-clients-text">NFT</div>
                </a>
              </div>
              <div className="header-right-services">
                <a href="#usapart-div">
                  <div className="header-right-clients-text">SERVICES</div>
                </a>
              </div>

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
            <div className="header-menu-wrap">
              <div className="header-menu-wrap-inner">
                {!isNavBarOpen ? (
                  <MenuIcon onClick={navbarworks} />
                ) : (
                  <Close onClick={navbarworks} />
                )}
              </div>
            </div>
          </div>
        </div>
        {isNavBarOpen && <NavBarOptions />}
      </div>
    </div>
  );
}

export default Header;
