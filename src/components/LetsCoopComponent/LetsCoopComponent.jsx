import "./LetsCoopComponent.css";
import img from '../../../assets/partnership_3.png'

function LetsCoopComponent({h2,ptop,pbottom,img}) {
  return (
    <div className="coop-component">
      <div className="coop-component-left">
        <div className="coop-component-left-inner">
          <div className="coop-component-left-top">
            <h2 className="coop-component-left-top-h2">{h2}</h2>
            <p className="coop-component-left-top-p">
              {ptop}
            </p>
          </div>
          <div className="coop-component-left-bottom">
            <div className="coop-component-left-bottom-inner">
              <h3 className="coop-component-left-bottom-inner-h3">
                Recommended for:
              </h3>
              <p className="coop-component-left-bottom-inner-p">
                {pbottom}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="coop-component-right">
        <div className="coop-component-right-inner">
            <img src={img} alt={h2} className="coop-component-right-inner-img" />
        </div>
      </div>
    </div>
  );
}

export default LetsCoopComponent;
