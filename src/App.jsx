import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  const { ethereum } = window;
  const account = true
  const acc = false
  const [isMetaMask, setIsMetaMask] = useState(false);
  useEffect(() => {
    if (ethereum) {
      setIsMetaMask(true);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home isMetaMask={isMetaMask} account={acc}/>} />
          <Route path="/dashboard" element={<PrivateRoute account={account} ><Dashboard /></PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
