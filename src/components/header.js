import React, { Component } from "react"
import MainMenu from "../components/MainMenu"
import MobileMenu from "../components/MobileMenu"
import MainLogo from "../components/MainLogo"
import "./header.css"

//Needs to be a class to allow property toggle for mobile menu
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let headerName = "header";
    if (this.state.isOpen) {
      headerName += ' mobileOpen';
    }
    return (
      <header style={{ width: '100%', zIndex: '100', position: 'fixed', height: '156px', border: '10px solid #fff', backgroundColor: '#ddd', }} className={headerName}>
        <div style={{ margin: `0 auto`, padding: `1.45rem 1.0875rem`, display: `flex`, justifyContent: `space-between`, alignItems: `center`, }} >
          <MainLogo></MainLogo>
          <button onClick={() => this.toggleMenu()} className="mobileIcon">
            <div className="hamburger1"></div>
            <div className="hamburger2"></div>
            <div className="hamburger3"></div>
          </button>
        </div>
        <div className="mobileMenuContainer">
          <MobileMenu></MobileMenu>
        </div>
      </header>
    );
  }
}

export default Header