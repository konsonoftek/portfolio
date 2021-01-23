import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import GlobalStyle from './components/styles/GlobalStyle';
import { MenuProvider } from './state/Menu';
import Navigation from "./components/Nav";
import Title from './components/Title';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const App = () => {
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity: 1 }}
    >
      <GlobalStyle />
      <MenuProvider>
        <Navigation />
      </MenuProvider>
      <Element name="Home"><Title /></Element>   
      <Element name="About"><About /></Element> 
      <Element name="Skills"><Skills /></Element>
      <Element name="Projects"><Projects /></Element>
      <Element name="Contact"><Contact /></Element>
    </motion.div>

  );
}

export default App;
