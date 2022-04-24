import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const { ethereum } = window;
  const [isMetaMask, setIsMetaMask] = useState(false);
  const [account, setAccount] = useState(null);
  const [accoutAddress, setAccountAddress] =useState('')
  const [connectingWallet, setConnectingWallet] = useState(false);

  const connectWallet = async () => {
    if (!ethereum) return;
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setAccount(accounts[0]);
  };

  const checkConnection = async () => {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    setAccount(accounts[0])
  }

  const sliceAddress = () => {
    setAccountAddress(`${account.slice(0,5)}.......${account.slice(-4)}`)
  }

  useEffect(() => {
    if (ethereum) {
      setIsMetaMask(true);
    }
    checkConnection()
    if(account) sliceAddress()
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
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
