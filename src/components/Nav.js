// import { Link } from "react-scroll";
// import { motion } from 'framer-motion';
import styled from 'styled-components';
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";


const NavStyles = styled.div`
  display:flex;
  flex-flow:column nowrap;
`;

const Nav = () => {
  return (
    <NavStyles>
      <DesktopNav />
      <MobileNav />
    </NavStyles>
  );
}

export default Nav;
