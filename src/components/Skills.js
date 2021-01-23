import styled from 'styled-components';
import { motion } from 'framer-motion';
import HtmlLogo from '../assets/html5-logo.svg';
import CssLogo from '../assets/css-logo.svg';
import JsLogo from '../assets/js-logo.svg';
import NodeLogo from '../assets/nodejs-logo.svg';
import ReactLogo from '../assets/react-logo.svg';

const SkillsStyles = styled.div`
  height: 100vh;
  width:100vw;
  display:grid;
  grid-template-columns:1fr 1fr;
  place-items:center;
  
  @media(max-width:1068px){
    grid-template-columns:1fr;
    grid-template-rows:2fr;
  }
`;

const SkillsDescription = styled.div`
  font-family: 'Nunito';
  font-size:1.3rem;
  grid-column:2;
  width:600px;
  line-height:1.9;

  p{
    padding:1rem;
  }

  @media(max-width:1068px){
    grid-column:1;
    grid-row:2;
    width:100vw;
    font-size:1.2rem;
    padding:1rem;
  }
  @media (max-width:568px) {
      font-size:1rem;
      p{
        padding:0.5rem;
      }
    }
`;
const SkillsImages = styled(motion.div)`
  display:grid;
  grid-template-columns:repeat(5, 1fr);
  grid-template-rows:repeat(4, 1fr);
  place-items:center;
  width:500px;
  height:400px;
  z-index:-1;
  .logo{
    width:100px;
    height:100px;
  }
  .html-logo{
    grid-column:3/4;
    grid-row:1;
    }
  .css-logo{
    grid-column:4/6;
    grid-row:2;
    }
  .js-logo{
    grid-row:3/5;
    grid-column:4;
    }
  .node-logo{
    grid-column:2;
    grid-row:3/5;
  }
  .react-logo{
    grid-column:1/3;
    grid-row:2;
  }
  @media(max-width:968px){
    width:230px;
    height:180px;
    .logo{
      width:50px;
      height:50px;
    }
  }
`;
const Skills = () => {
  return (
    <SkillsStyles>
      <SkillsImages
        animate={{ rotate: 360 }}
        transition={{
          duration: 6,
          loop: Infinity,
          ease: "linear"
        }}
      >
          <motion.img animate={{rotate: -360}} transition={{loop: Infinity, duration: 6, ease: "linear"}} className="html-logo logo" src={HtmlLogo} alt="Html Logo" />
          <motion.img animate={{rotate: -360}} transition={{loop: Infinity, duration: 6, ease: "linear"}} className="css-logo logo" src={CssLogo} alt="Css Logo" />
          <motion.img animate={{rotate: -360}} transition={{loop: Infinity, duration: 6, ease: "linear"}} className="js-logo logo" src={JsLogo} alt="JavaScript Logo" />
          <motion.img animate={{rotate: -360}} transition={{loop: Infinity, duration: 6, ease: "linear"}} className="node-logo logo" src={NodeLogo} alt="Node Logo" />
          <motion.img animate={{rotate: -360}} transition={{loop: Infinity, duration: 6, ease: "linear"}} className="react-logo logo" src={ReactLogo} alt="React Logo"/>
      </SkillsImages>
      <SkillsDescription>
        <p>As a front-end developer, my skills include html, css, and javascript. I have experience with React.js, Gatsby.js, and Next.js, which provide me with the tools to create lightining fast web applications.</p>
        <p>I also have experience as a back-end developer. I have worked wiith Node.js, Prisma as an ORM, and MongoDB for the database.</p>
        <p>As a developer there is a need to keep on learning new techniques and technologies. Currently, I'm expanding my experience by learning to work with illustrator and animations.</p>
      </SkillsDescription>
    </SkillsStyles>
  );
}

export default Skills;