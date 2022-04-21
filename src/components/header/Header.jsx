import "./Header.css";
import nameImg from "../../../assets/gmi-_Wordmark_Black.svg";
import logo from "../../../assets/gmi-_Green_Symbol.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import { useState } from "react";
import NavBarOptions from "../NavBarOptions/NavBarOptions";

function Header({ isMetaMask, account }) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const connectWallet = () => {
    if (isMetaMask) console.log("connected");
  };

  const navbarworks = () => {
    setIsNavBarOpen(!isNavBarOpen);
    console.log("clicked");
  };

  return (
    <div className="header-div-wrap">
      <div className="header-div">
        <div className="header-div-inner">
          <div className="header-wrap">
            <div className="header-left">
              <img src={logo} alt="gmi-logo" className="gmi-header-logo" />
              <img src={nameImg} alt="gmi-logo" className="header-left-title" />
            </div>

            <div className="header-right">
              <div className="header-right-welcome">
                <div className="header-right-welcome-text">welcome</div>
              </div>
              <div className="header-right-clients">
                <div className="header-right-clients-text">Clients</div>
              </div>

              <div className="header-right-connect-wrap">
                <div className="header-right-connect">
                  {account ? (
                    <div
                      className="header-right-connect-text"
                      onClick={connectWallet}
                    >
                      {isMetaMask ? "Connect" : "Install MetaMask"}
                    </div>
                  ) : (
                    "Account is : 0X...."
                  )}
                </div>
              </div>
            </div>
            <div className="header-menu-wrap">
              <div className="header-menu-wrap-inner">
                {!isNavBarOpen ? <MenuIcon onClick={navbarworks} /> : <Close onClick={navbarworks} />}
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
