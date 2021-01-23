import styled from 'styled-components';
import menu from '../assets/menuIcon.svg';

const MenuIcon = styled.div`
  display:none;
  position:fixed;
  top:0;
  right:0;
  width:100px;
  cursor: pointer;
  @media (max-width:968px) {
    display:block;
  }
`;

const ToggleMenu = (props) => {
  return (
    <MenuIcon>
      <img src={menu} alt="Menu Icon" />
    </MenuIcon>
  );
}

export default ToggleMenu;