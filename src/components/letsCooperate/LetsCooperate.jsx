import LetsCoopComponent from "../LetsCoopComponent/LetsCoopComponent";
import "./LetsCooperate.css";
import letsCoopArray from "../../arrays/letsCoopArray";
import { useState } from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function LetsCooperate() {
  const { ref, inView } = useInView();
  const animationOne = useAnimation();

  const [cooperateState, setCooperateState] = useState("team");
  const [array, setArray] = useState([]);
  const selectCooperate = (a) => {
    setCooperateState(a);
  };

  const newArray = (a, state) => {
    a.filter((ap) => {
      ap.title === state && setArray([ap]);
    });
  };

  useEffect(() => {
    newArray(letsCoopArray, cooperateState);

    if (inView) {
      animationOne.start({
        x: 0,
        transition: {
          duration: 1,
          bounce: 0.2,
        },
      });
    }

    if (!inView) {
      animationOne.start({
        x: "-100vw ",
      });
    }
  }, [cooperateState, inView]);
  return (
    <div className="lets-cooperate-div" ref={ref}>
      <motion.div className="lets-cooperate-div-inner" animate={animationOne}>
        <div className="lets-cooperate-div-inner-top">
          <h1 className="lets-cooperate-div-inner-top-h1">
            How we cooperate with you
          </h1>
          <p className="lets-cooperate-div-inner-top-p">
            We offer many different levels of services to meet the operational
            and financial goals of our clients
          </p>
        </div>
        <div className="lets-cooperate-div-inner-bottom">
          <div className="lets-cooperate-div-inner-bottom-buttons">
            <button
              className={
                cooperateState === "team"
                  ? "lets-cooperate-div-inner-bottom-buttons-selected"
                  : "lets-cooperate-div-inner-bottom-button-team"
              }
              onClick={() => {
                selectCooperate("team");
              }}
            >
              Team extension
            </button>
            <button
              className={
                cooperateState === "project"
                  ? "lets-cooperate-div-inner-bottom-buttons-selected"
                  : "lets-cooperate-div-inner-bottom-button-project"
              }
              onClick={() => {
                selectCooperate("project");
              }}
            >
              Project-Based
            </button>
            <button
              className={
                cooperateState === "time"
                  ? "lets-cooperate-div-inner-bottom-buttons-selected"
                  : "lets-cooperate-div-inner-bottom-button-Time"
              }
              onClick={() => {
                selectCooperate("time");
              }}
            >
              Time and Materials
            </button>
            <button
              className={
                cooperateState === "customized"
                  ? "lets-cooperate-div-inner-bottom-buttons-selected"
                  : "lets-cooperate-div-inner-bottom-button-customized"
              }
              onClick={() => {
                selectCooperate("customized");
              }}
            >
              Customized Patnership
            </button>
          </div>
          <div className="lets-cooperate-div-inner-bottom-display">
            <div className="lets-cooperate-div-inner-bottom-display-inner">
              {array.map(({ title, h2, ptop, pbottom, img }) => (
                <LetsCoopComponent
                  key={title}
                  h2={h2}
                  ptop={ptop}
                  pbottom={pbottom}
                  img={img}
                />
              ))}
            </div>
          </div>
          <div className="lets-cooperate-div-inner-round-buttons">
            <div className="lets-cooperate-div-inner-round-buttons-in">
              <button
                className={
                  cooperateState === "team"
                    ? "lets-cooperate-div-inner-bottom-round-selected"
                    : "lets-cooperate-div-inner-bottom-round-team"
                }
                onClick={() => {
                  selectCooperate("team");
                }}
              ></button>
              <button
                className={
                  cooperateState === "project"
                    ? "lets-cooperate-div-inner-bottom-round-selected"
                    : "lets-cooperate-div-inner-bottom-round-project"
                }
                onClick={() => {
                  selectCooperate("project");
                }}
              ></button>
              <button
                className={
                  cooperateState === "time"
                    ? "lets-cooperate-div-inner-bottom-round-selected"
                    : "lets-cooperate-div-inner-bottom-round-Time"
                }
                onClick={() => {
                  selectCooperate("time");
                }}
              ></button>
              <button
                className={
                  cooperateState === "customized"
                    ? "lets-cooperate-div-inner-bottom-round-selected"
                    : "lets-cooperate-div-inner-bottom-round-customized"
                }
                onClick={() => {
                  selectCooperate("customized");
                }}
              ></button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LetsCooperate;
