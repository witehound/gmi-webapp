import UsapartCard from "../UsapartCard/UsapartCard";
import "./Usapart.css";
import "./Pmind.css";
import usApartArray from "../../arrays/usApartArrayLeft";
import usApartArrayRight from "../../arrays/usApartArrayRight";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Usapart() {
  const { ref, inView } = useInView();
  const animationTop = useAnimation();
  const animationLeft = useAnimation();
  const animationRight = useAnimation();
  const add = true;

  useEffect(()=>{
    if(inView){
      animationTop.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        }
      })

      animationLeft.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.1,
        }
      })

      animationRight.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.1,
        }
      })
    }

    if(!inView){
      animationTop.start({
        y: '-100vh',
        opacity: 0
      })

      animationLeft.start({
        x: '-100vw',
        opacity: 0
      })

      animationRight.start({
        x: '100vw',
        opacity: 0
      })
    }
    console.log(inView)
  },[inView])

  return (
    <div className="usapart-div">
      <div className="usapart-div-inner" ref={ref}>
        <motion.div className="usapart-div-top" animate={animationTop}>
          <h1 className="usapart-div-top-h1" >What sets us apart</h1>
          <p className="usapart-div-top-p">
            In collaborations with our much loved customers, we create
            ground-breaking solutions for their unique business needs
          </p>
        </motion.div>
        <div className="usapart-div-bottom">
          <div className="usapart-div-bottom-inner">
            <motion.div className="usapart-div-bottom-left" animate={animationLeft}>
              {usApartArray.map(({ img, h2, p }) => (
                <UsapartCard key={h2} img={img} h2={h2} p={p}  />
              ))}
            </motion.div>
            <motion.div className="usapart-div-bottom-right" animate={animationRight}>
              {usApartArrayRight.map(({ img, h2, p, }) => (
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usapart;
