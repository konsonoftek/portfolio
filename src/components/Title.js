import styled from 'styled-components';
import background from '../assets/bgV10.svg'


const TitleStyles = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size:cover;
  background-position:center;
  height:100vh;
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:1fr 1fr;
  
  .title {
    grid-column:1;
    grid-row:2;
    place-self:center;
    color: #002035;
    font-size:2rem;
    font-family: 'MavenPro', serif;
    letter-spacing:2.5px;
  }
  @media (max-width:1068px) {
    grid-template-columns: 1fr;

    .title{
      text-align:center;
      font-size:1.3rem;
    }
  }

  @media (max-width:568px) {
    .title{
      font-size:0.9rem;
    }
  }

`;

const Title = () => {
  return (
    <TitleStyles>
      <div className="title">
        <h1>Konstantin Tekin</h1>
        <p>Developer</p>
      </div>
    </TitleStyles>
  );
}

export default Title;