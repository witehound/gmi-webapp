import "./BlockFourCard.css";

function BlockFourCard({number,title,text}) {
  return (
    <div className="blockfourcard">
      <div className="blockfourcard-container">
        <div className="blockfourcard-top">
          <div className="blockfourcard-top-number">
              {number}
          </div>
        </div>
        <div className="blockfourcard-middle">{title}</div>
        <div className="blockfourcard-bottom">
          {text}
        </div>
      </div>
    </div>
  );
}

export default BlockFourCard;
