import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
import logo from "../../assets/logo/Ecodatastats_logo_transparent.png";

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>ECO DATA STATS</h2>
        {/* <img src={coverImage} alt="wooden background"></img> */}
        {props.children}
      </div>
    </header>
  );
}

export default Header;