import styled from 'styled-components';
import Profile from '../assets/profile-pic.png'

const AboutStyles = styled.div`
  height: 100vh;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-gap:6rem;
  place-items: center;

  @media(max-width:1068px){
    grid-template-rows:1fr 1fr;
    grid-template-columns:1fr;
    grid-gap:0;
  }
`;
const ProfilePicture = styled.img`
  width:500px;
  height:500px;
  grid-column:2;
  justify-self:flex-start;
  
  @media(max-width:1068px){
    grid-row:1;
    grid-column:1;
    width:330px;
    height:330px;
    justify-self:center;
  }
`;

const ProfileDescription = styled.div`
  width:500px;
  font-family:'Nunito';
  font-size:1.3rem;
  line-height:2.5;
  justify-self:flex-end;

  @media (max-width:568px) {
      font-size:0.8rem;
      line-height:2;
    }

  @media(max-width:1068px){
    justify-self:center;
    width:100vw;
    font-size:1.1rem;
    padding:0 2rem;
  }

`;
const About = () => {
  return (
    <AboutStyles>
      <ProfileDescription>Hi, my name is Konstantin. I'm a developer based in New York.
        I enjoy creating beautiful and modern web application. I graduated from New York Institute of technology
        with a degree in computer science. I'm currently accepting small projects to work on, so feel free to contact me!
      </ProfileDescription>
      <ProfilePicture src={Profile} />
    </AboutStyles>
  );
}

export default About;