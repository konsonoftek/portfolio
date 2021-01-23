import styled from 'styled-components';
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import { useMenuContext } from '../state/Menu';

// {/* <ul>
// <motion.li whileHover={{ color:"#07c3df"}} className="nav-links"><Link to="title" spy={true} smooth={true} offset={-100} duration={250}>Home</Link></motion.li>
// <motion.li whileHover={{ color:"#07c3df"}} className="nav-links"><Link to="about" spy={true} smooth={true} duration={250}>About</Link></motion.li>  
// <motion.li whileHover={{ color:"#07c3df"}} className="nav-links"><Link to="skills" spy={true} smooth={true} duration={250}>Skills</Link></motion.li>  
// <motion.li whileHover={{ color:"#07c3df"}} className="nav-links"><Link to="projects" spy={true} smooth={true} duration={250}>Projects</Link></motion.li> 
// <motion.li whileHover={{ color: "#07c3df" }} className="nav-links"><Link to="contact" spy={true} smooth={true} duration={250}>Contact</Link></motion.li>
// </ul> */}

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position:relative;
  top:1.2rem;
  align-items: center;
  list-style: none;
  li:not(:last-child) {
    margin-right: 26px;
  }
  li {
    font-size:1.5rem;
    font-family:'Nunito';
    cursor:pointer;
  }
  .link{
    position: relative;
    text-decoration: none;
    padding:0.5rem;
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 2px;
      width: 0;
      transition: width 150ms linear;
    }
    &:hover::before {
      width: 100%;
    }
  }
  @media screen and (max-width: 1068px) {
    flex-direction: column;
    li {
      padding: 2rem 1rem;
      margin: 0;
    }
    li:last-child{
      margin-right: 26px;
    }
  }
`;

export const links = ["Home", "About", "Skills", "Projects", "Contact"];

const DesktopNavLinks = () => {
  const { closeMenu } = useMenuContext();

  return (
    <NavLinksWrapper className='nav-links'>
      {links.map((link) => (
        <motion.li whileHover={{ color:"#07c3df"}} key={link}>
          <Link className='link' to={link} spy={true} smooth={true} duration={250} onClick={closeMenu}>{link}</Link>
        </motion.li>
      ))}
    </NavLinksWrapper>
  );
}

export default DesktopNavLinks;