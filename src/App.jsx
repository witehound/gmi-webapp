import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Access from "./Pages/Access/Access";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const { ethereum } = window;
  const [isMetaMask, setIsMetaMask] = useState(false);
  const [account, setAccount] = useState(null);
  const [accoutAddress, setAccountAddress] = useState("");
  const [connectingWallet, setConnectingWallet] = useState(false);
  const [news,setNews] = useState(true)

  const connectWallet = async () => {
    if (!ethereum) {
      setConnectingWallet(false);
    }
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setAccount(accounts[0]);
  };

  const checkConnection = async () => {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (account) connectWallet();
  };

  const sliceAddress = () => {
    setAccountAddress(`${account.slice(0, 5)}.......${account.slice(-4)}`);
  };


  useEffect(() => {
    if (ethereum) {
      setIsMetaMask(true);
    }
    checkConnection();
    if (account) sliceAddress();
  }, [account]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isMetaMask={isMetaMask}
                connectWallet={connectWallet}
                connectingWallet={connectingWallet}
                setConnectingWallet={setConnectingWallet}
                account={account}
                accoutAddress={accoutAddress}
                ethereum={ethereum}
                news={news}
                setNews={setNews}
              />
            }
          />

          <Route
            path="/web3"
            element={
              account ? (
                <Access
                  isMetaMask={isMetaMask}
                  connectWallet={connectWallet}
                  connectingWallet={connectingWallet}
                  setConnectingWallet={setConnectingWallet}
                  account={account}
                  accoutAddress={accoutAddress}
                  ethereum={ethereum}
                  news={news}
                  setNews={setNews}
                />
                
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
