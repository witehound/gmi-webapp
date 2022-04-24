import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const { ethereum } = window;
  const [isMetaMask, setIsMetaMask] = useState(false);
  const [account, setAccount] = useState(false);
  const [connectingWallet, setConnectingWallet] = useState(false);

  const connectWallet = async () => {
    if (!ethereum) return;
    const account = await ethereum.request({ method: "eth_requestAccounts" });
    setAccount(account[0]);
  };

  useEffect(() => {
    if (ethereum) {
      setIsMetaMask(true);
    }
    console.log(account);
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
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
