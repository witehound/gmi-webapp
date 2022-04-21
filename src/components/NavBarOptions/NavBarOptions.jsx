import NavBarButtons from "../NavBarButtons/NavBarButtons";
import "./NavBarOptions.css";

function NavBarOptions() {
  return <div className="nav-bar-options-div">
    <div className="nav-bar-options-div-inner">
       <div className="nav-bar-options-div-content">
         Content
       </div>
      <NavBarButtons />
      <NavBarButtons />
      <NavBarButtons />
      <NavBarButtons />
    </div>
  </div>;
}

export default NavBarOptions;
