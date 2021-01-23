import styled from 'styled-components';
import ContactButton from './ContactButton';

const ProjectsStyles = styled.div`
  height: 100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
  p {
    font-size:3rem;
    opacity:0.4;
    padding:2rem;
    z-index:-1;
  }
  @media(max-width:968px){
    width:100vw;
    p{
      text-align:center;
    }
  }
`;
const Projects = () => {
  return (
    <ProjectsStyles>
      <p>Currently accepting small projects</p>
      <ContactButton />
    </ProjectsStyles>
  );
}

export default Projects;