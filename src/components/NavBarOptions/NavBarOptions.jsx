import "./NavBarOptions.css";
import nameImg from "../../../assets/gmi-_Wordmark_Black.svg";

function NavBarOptions() {
  return <div className="nav-bar-options-div">
    <div className="nav-bar-options-div-inner">
       <div className="nav-bar-options-div-content">
         <div className="nav-bar-options-div-p">
           <q> Build your web3 products at Studio Gmi the right way </q> 
         </div>
         <div className="nav-bar-options-div-p">
           <q> Innovate your bussiness at Studio Gmi the right way </q> 
         </div>
         <div className="nav-bar-options-div-p">
           <q> At Studio Gmi we help you give you customers the experience they deserve </q> 
         </div>
         <div className="nav-bar-options-div-contact">
             <div className="nav-bar-options-div-p-top">
               Contact us
             </div>
             <div className="nav-bar-options-div-p-">
               <a href="mailto: hi@studio-gmi.com">hi@studio-gmi.com</a>
             </div>
         </div>
       </div>
       <div className="nav-bar-options-div-img">
         <img src={nameImg} alt="logo" className="nav-bar-options-div-img-img" />
       </div>
    </div>
  </div>;
}

export default NavBarOptions;
