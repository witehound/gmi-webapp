import "./UsapartCard.css";

function UsapartCard({ img, h2, p }) {

  return (
    <div className="usapart-card-div-wrap" >
      <div className="usapart-card-div-top">
        <img src={img} className="usapart-card-div-img" />
      </div>
      <div className="usapart-card-div-story">
        <h2 className="usapart-card-div-story-h2">{h2}</h2>
        <p className="usapart-card-div-story-p">{p}</p>
      </div>
    </div>
  );
}

export default UsapartCard;
