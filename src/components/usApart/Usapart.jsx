import UsapartCard from "../UsapartCard/UsapartCard";
import "./Usapart.css";
import "./Pmind.css"
import usApartArray from "../../arrays/usApartArrayLeft";
import usApartArrayRight from "../../arrays/usApartArrayRight";

function Usapart() {
  const add = true;
  return (
    <div className="usapart-div">
      <div className="usapart-div-inner">
        <div className="usapart-div-top">
          <h1 className="usapart-div-top-h1">What sets us apart</h1>
          <p className="usapart-div-top-p">
            In collaborations with our much loved customers, we create
            ground-breaking solutions for their unique business needs
          </p>
        </div>
        <div className="usapart-div-bottom">
          <div className="usapart-div-bottom-inner">
            <div className="usapart-div-bottom-left">
              {usApartArray.map(({ img, h2, p }) => (
                <UsapartCard key={h2} img={img} h2={h2} p={p} />
              ))}
            </div>
            <div className="usapart-div-bottom-right">
              {usApartArrayRight.map(({ img, h2, p }) => (
                <UsapartCard key={h2} img={img} h2={h2} p={p} />
              ))}
              <div className="project-card-div-wrap">
                <div className="project-card-div-top">
                  <h1 className="project-card-div-top-h1">
                    Have a project in mind?
                  </h1>
                </div>
                <div className="project-card-div-bottom">
                  <button className="project-card-div-top-button">
                    Build at gmi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usapart;
