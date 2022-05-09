import "./News.css";
import NewsCard from "./NewsCard/NewsCard";

function News() {
  return (
    <div className="news">
      <div className="news-container">
        <div className="news-top">
          <div className="news-top-container">
            <NewsCard
              newsImg={"https://i.ibb.co/88LTVS0/GMITAPS.jpg"}
              title={"The Alpha Pony Society"}
              p1={
                "Real life utility and web3 integration. Your unique Alpha Pony is your pass into our virtual community that owns a, real life racing club - The Alpha Pony Racing Club."
              }
              p2={"Earn passive income from race winnings, studs and sales, for life and be part of the next big digital community in the form of ENFT"}
              p3={"With an ambitious yet achievable road map ahead, the future holds big things of the income, IRL/Digital rewards, merch, race visits, parties and interactive web3 activities."}
              link={'www.thealphaponysociety.com'}
            />
            <NewsCard
              newsImg={"https://i.ibb.co/ygVDgXK/Nike.gif"}
              title={"Nike RTFKT Acquisition"}
              p1={"NIKE, Inc. today announced the acquisition of RTFKT, a leading brand that leverages cutting edge innovation to deliver next generation collectibles that merge culture and gaming."}
              p2={"“This acquisition is another step that accelerates Nike’s digital transformation and allows us to serve athletes and creators at the intersection of sport, creativity, gaming and culture,” says John Donahoe, President and CEO of NIKE, Inc."}
              p3={"“We’re acquiring a very talented team of creators with an authentic and connected brand. Our plan is to invest in the RTFKT brand, serve and grow their innovative and creative community and extend Nike’s digital footprint and capabilities.”"}
              link={'https://news.nike.com/news/nike-acquires-rtfkt'}
            />
          </div>
        </div>
        <div className="news-top">
          <div className="news-top-container">
            <NewsCard
              newsImg={"https://i.ibb.co/NNvVWHL/Selfridges.webp"}
              title={"Selfridges X decentraland"}
              p1={"The British department store chain Selfridges is opening a virtual department store in Decentraland, an environment in the ‘metaverse’, where shoppers can buy NFTs and watch digital fashion shows."}
              p2={"Originally, the project’s main aim was to attract more visitors to the London physical shop, but now Paco Rabanne and Fondation Vasarely’s NFTs are also available in the Decentraland department store. Visitors can buy them with crypto coins."}
              p3={"Selfridges is not the only physical retailer to go digital for Decentraland’s Metaverse Fashion Week. Fashion brands like DKNY, Privé Porter and Charles & Keith also opened a virtual shop for the occasion. They also showed their designs in an elongated virtual fashion show, which ran non-stop throughout the weekend."}
              link={'https://thesolesupplier.co.uk/news/selfridges-enters-the-metaverse-with-its-first-decentraland-store/'}
            />
            <NewsCard
              newsImg={"https://i.ibb.co/fqyGvqJ/Starbucks.jpg"}
              title={"Starbucks enters the web3 Space"}
              p1={"Starbucks plans to launch a series of non-fungible token (NFT) collections, according to a company blog post published Tuesday."}
              p2={"The popular coffee chain says its NFTs will provide “unique experiences, community building and customer engagement,” complementing its current app-based digital ecosystem."}
              p3={"In addition to just NFTs, the company alluded to a full-fledged “Starbucks Digital Community Web3 platform” possibly tied to mobile payments in-store."}
              link={'https://stories.starbucks.com/stories/2022/starbucks-creating-the-digital-third-place/'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
