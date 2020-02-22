import React, { Component } from "react"
import MobileMenu from "../components/MobileMenu"
import MainLogo from "../components/MainLogo"
import styled from 'styled-components'
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
      <header style={{ width: '100%', zIndex: '100', position: 'fixed', height: '110px', border: '10px solid #fff', backgroundColor: '#ddd', }} className={headerName}>
        <div style={{ margin: `0 auto`, padding: `0`, display: `flex`, justifyContent: `space-between`, alignItems: `center`, }} >
          <MainLogo></MainLogo>
          <HeaderSpace></HeaderSpace>
          <HeaderContact>
            <div>
            <h3>James M. Vanderheyden</h3>
            <p>info@architecturaldynamics.net<br/>1.708.278.2891</p>
            </div>
          </HeaderContact>
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

const HeaderSpace = styled.div`
  width: 38%;
  height: 90px;
  border-left: 10px solid #fff;
  background-color: #950000;
`

const HeaderContact = styled.div`
  width: 30%;
  height: 90px;
  border-left: 10px solid #fff;
  background-color: #8e8f99;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  align-items: center;
  h3 {
    font-size: 20px;
    margin-bottom: 0px;
    width: 100%;
  }
  p{
    font-size: 16px;
    line-height: 1.2em;
    margin-bottom: 0px;
    width: 100%;
  }
`

export default Header