import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button"
import headerLogo from "../../../assets/headerLogo.png"

function Header({
  isMetaMask,
  account,
  connectWallet,
  setConnectingWallet,
  accoutAddress,
  ethereum,
  news,
  setNews
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
               <img src={headerLogo} alt="" className="gmi-header-logo"/>
              </div>
              {account && news && (
                <div className="header-right-connect-wrap">
                  <Link to="/web3" onClick={()=>{setNews(!news)}}>
                    <Button text={'welcome'} color={'white'} header={'header-button'}/>
                  </Link>
                  {console.log(account)}
                  {console.log(news)}
                </div>
              )}
              <div className="header-right-connect-wrap header-right-connect-wrap-other">
                <div
                 
                  onClick={loadConnectWallet}
                >
                  {!account ? (
                   <Button text={isMetaMask ? "Connect" : "Install MetaMask"} color={'white'} header={'header-button'}/>
                  ) : (
                    <Button text={accoutAddress} color={'white'} header={'header-button'} accountPresent={'header-account'}/>
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
