import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";

// import MenuIcon from "../../hamburgerMenu/index";
// HamburgerMenu svg can be used in place of the current → being used

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  // toogleMenu sets the menu to true which allows for conditional rendoring on the Nav items
  // on initial load there is currently a temporary "Catch Phrase", once the user hits the →
  // it sets memu to true, which renders the navbar items
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Nav className="navbar">
        <p style={{ display: !menu ? "flex" : "none" }}>
          Where Democracy Meets
        </p>
        <div style={{ display: menu ? "flex" : "none" }}>
          <Link href="/">
            <a>Home</a>
          </Link>
          {/* Next.js uses Link to wrap an <a> tag which allows for users to navigate between pages - The code above will return the user to the home page located at localhost:3000/ */}
          <Link href="/">
            <a>Start a Vote</a>
          </Link>
          {/* Temp href for the time being until pages are set up */}
          <Link href="/landing">
            <a>Temp Landing</a>
          </Link>
        </div>
        <Button
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={toggleMenu}
        >
          {!menu && <ButtonText>&#8594;</ButtonText>}
          {/* <MenuIcon /> */}
        </Button>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: #1d3557;
  position: relative;
  color: #eb5e28;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 2.5px;
  font-size: 15px;
  height: 70px;

  a {
    border-right: 1px solid;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 33%;
    &:hover {
      text-decoration: underline;
    }
    &:last-of-type {
      border-right: none;
    }
  }
`;

const Button = styled.button`
  position: absolute;
  right: 8px;
  top: 18px;
  outline: none;
  &:active {
    border: 1px solid;
  }
`;

const ButtonText = styled.span`
  color: #eb5e28;
  font-size: 26px;
`;
