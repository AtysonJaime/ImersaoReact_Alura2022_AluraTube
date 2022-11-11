import styled from "styled-components";
import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";

// Esse é um meio base como um arquivo react funciona
// Para ele rodar,precisa estar em uma pasta chamada page
function HomePage() {
  // Criação de variaveis antes do return
  // const estilosDaHomePage = { backgroundColor: "red" };

  return (
    // Para craiação de estilização, utiliza como se fosse em chaves
    // <div style={estilosDaHomePage}>
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header banner={config.banner} />
        {/* Aqui estou passando uma props */}
        <Timeline playlists={config.playlists} favorites={config.favorites} />
      </div>
    </>
  );
}
export default HomePage;

// Criar o style do componente
const StyledHeader = styled.div`
  .user-banner {
    margin-top: 50px;
    height: 230px;
    width: 100%;
    object-fit: cover;
  }
  .user-info {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header(props) {
  // Para chamar variavies utiliza {}
  // Para comentar algo so dar ctrl K + ctrl C
  return (
    <StyledHeader>
      <img
        className="user-banner"
        alt="Montanhas ao entardescer"
        src={props.banner}
      />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
