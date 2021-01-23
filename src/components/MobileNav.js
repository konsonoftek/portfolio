import styled from 'styled-components';
import { useMenuContext } from "../state/Menu";
import NavLinks from "./NavLinks";

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 40wv;
  background:white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MobileNavbar = () => {
  const { isMenuOpen } = useMenuContext();

  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <NavLinks />
        </MobileNav>
      )}
    </>  
  );
}

export default MobileNavbar;