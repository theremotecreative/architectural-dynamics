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
      <header style={{ width: '100%', zIndex: '100', position: 'fixed', height: '110px', border: '10px solid #fff', }} className={headerName}>
        <div style={{ margin: `0 auto`, padding: `0`, display: `flex`, justifyContent: `space-between`, alignItems: `center`, }} >
          <MainLogo></MainLogo>
          <HeaderSpace></HeaderSpace>
          <HeaderContact>
            <div>
            <h3>James M. Vanderheyden</h3>
            <p><a href="mailto:jmvanderheyden@yahoo.com">jmvanderheyden@yahoo.com</a><br/><a href="tel:+17082782891">(708) 278-2891</a></p>
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
  transition-duration: .3s;
  @media(max-width:1000px) {
    width: 18%
  }
  @media(max-width:800px) {
    display: none;
  }
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
  transition-duration: .3s;
  h3 {
    font-family: Montserrat, Open Sans;
    font-size: 18px;
    margin-bottom: 0px;
    width: 100%;
  }
  p{
    font-family: Roboto Condensed, Arial;
    font-size: 14px;
    line-height: 1.3em;
    margin-top: 3px;
    margin-bottom: 0px;
    width: 100%;
  }
  a {
    color: rgba(0,0,0,.6);
    text-decoration: none;
    &:hover {
      color: rgba(0,0,0,1);
    }
  }
  @media(max-width:1000px) {
    width: 42%;
  }
  @media(max-width:800px) {
    display: none;
  }
`

export default Header