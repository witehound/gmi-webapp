import "./Home.css";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import CryptoStats from "../../components/CryptoStats/CryptoStats";
import NftStats from "../../components/NftStats/NftStats";
import Usapart from "../../components/usApart/Usapart";
import Copyright from "../../components/Copyright/Copyright";
import LetsCooperate from "../../components/letsCooperate/LetsCooperate";
function Home({ isMetaMask, account }) {
  const works = false;
  return (
    <>
      <Header account={account} isMetaMask={isMetaMask} />
      <div className={works ? "Home-hidden" : "Home"}>
        <Hero />
        <CryptoStats />
        <NftStats />
        <Usapart />
        <LetsCooperate />
        <Copyright />
      </div>
    </>
  );
}

export default Home;
