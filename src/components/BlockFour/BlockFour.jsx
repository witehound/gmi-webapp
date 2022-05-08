import "./BlockFour.css";
import BlockFourCard from "./BlockFourCard/BlockFourCard";
import BlockFourImage from "../../../assets/BlockFourImage.png";
import linkedin from "../../../assets/linkedin.png";
import twitter from "../../../assets/twitter.png";

function BlockFour() {
  return (
    <div className="blockfourwrap">
      <div className="blockfour">
        <div className="blockfour-container">
          <div className="blockfour-usapart">
            <div className="blockfour-usapart-top">
              <h1 className="blockfour-usapart-h1">What sets us apart?</h1>
            </div>
            <div className="blockfour-usapart-bottom">
              <div className="blockfour-usapart-bottom-top">
                <BlockFourCard
                  number={1}
                  title={"Virtual Assets"}
                  text={
                    "Wearables will be the next social currency. Currently, every year $54 billion is spent on virtual goods, almost double the amount spent buying music. A prime example of this is Under Armour, who created 2973 metaverse wearable sneakers with Steph Curry (Genesis Curry Flow) that generated $1m for them in less than 30 minutes."
                  }
                />
                <BlockFourCard
                  number={2}
                  title={"Access only areas for NFT holders"}
                  text={
                    "Access to web3 is restricted to web3 compatible wallets and browsers. Not every NFT will have value, but every NFT will have a use. You can offer exclusive meets, drops and extra content to your NFT holders allowing them to engage with your brand further and in a more committed way."
                  }
                />
                <BlockFourCard
                  number={3}
                  title={"Virtual Passes"}
                  text={
                    "Limited drops or one off pieces create value in your brand, however it does attract customers whose sole purpose is to buy into the product and to sell it for more the next day. By building a secondary market royalty into your NFT contract you will be able to sell limited runs and still gain the information of the end user (your true customer) as well as earning a small percentage of the secondary market price of your item."
                  }
                />
              </div>
              <div className="blockfour-usapart-bottom-bottom">
                <BlockFourCard
                  number={4}
                  title={"Airdrop Tech"}
                  text={
                    "A new way to build customer loyalty, by simply using a service or performing a task, the dapp (web3 application) provides additional value by rewarding wallet addresses with a cryptocurrency, token, or NFT.A new way to build customer loyalty, by simply using a service or performing a task, the dapp (web3 application) provides additional value by rewarding wallet addresses with a cryptocurrency, token, or NFT."
                  }
                />
                <BlockFourCard
                  number={5}
                  title={"Secondary market royalties"}
                  text={
                    "Ticketing events through web3 eliminates uncontrolled resale and counterfeit tickets. It allows event organisers to create, manage and promote their events with dramatically reduced costs, even letting them set price controls and receive commissions on ticket resales. It also gives ticket buyers the option of rewards for promoting events."
                  }
                />
              </div>
            </div>
          </div>
          <div className="spacer">{"  "}</div>
          <div className="blockfour-footer">
            <hr className="blockfour-horizontal" />
            <div className="blockfour-footer-container">
              <div className="blockfour-footer-image">
                <img
                  src={BlockFourImage}
                  alt=""
                  className="blockfour-footer-image-image"
                />
              </div>
              <div className="blockfour-footer-copyright">
                © Copyright 2022 Studio GMI. All Rights Reserved
              </div>
              <div className="blockfour-footer-links">
                <div className="blockfour-footer-links-wrap">
                  <div className="blockfour-footer-links-linkdln">
                    <a href="https://www.linkedin.com/company/studiogmi/">
                      <img
                        src={linkedin}
                        alt=""
                        className="blockfour-footer-links-linkdln-image"
                      />
                    </a>
                  </div>
                  <div className="blockfour-footer-links-twitter">
                    <a href="https://twitter.com/studio_gmi">
                      <img
                        src={twitter}
                        alt=""
                        className="blockfour-footer-links-twitter-image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockFour;
