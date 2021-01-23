import styled from 'styled-components';
import { Link } from "react-scroll";
import { motion } from 'framer-motion';

const ButtonStyle = styled(motion.button)`
  border:0;
  outline:0;
  padding:1.5rem 3rem;
  font-size:1.2rem;
  cursor: pointer;
  background:#fff;
  color:#006d65;
  border:1px solid #006d65;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius:10px;
  font-family:'Nunito';
  
`;

const ContactButton = () => {
  return (
    <Link to="Contact">
      <ButtonStyle
        whileHover={{
          backgroundColor: "#006d65",
          color: '#fff'
        }}
        whileTap={{ scale:0.9 }}
        type="button"
      >
        Contact Me
      </ButtonStyle>
    </Link>
  );
}

export default ContactButton;