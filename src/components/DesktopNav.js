import styled from "styled-components";
import { useMenuContext } from "../state/Menu";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  padding: 0 60px;
  z-index: 2;
  @media screen and (max-width: 1068px) {
    justify-content: space-between;
    padding: 0 30px;
  }

  .nav-links {
    @media screen and (max-width: 1068px) {
      display: none;
    }
  }
  .hamburger-react {
    display: none;
    z-index: 99;
    position:fixed !important; 
    top:1.5rem;
    right:2rem;
    @media screen and (max-width: 1068px) {
      display: block;

    }
  } 
`;

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  return (
    <DesktopNav>
      <NavLinks />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0.2} />
    </DesktopNav>
  )
}

export default DesktopNavbar;