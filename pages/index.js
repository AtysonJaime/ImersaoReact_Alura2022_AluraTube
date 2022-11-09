import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
// Esse é um meio base como um arquivo react funciona
// Para ele rodar,precisa estar em uma pasta chamada page
function HomePage() {
  // Criação de variaveis antes do return
  //const estilosDaHomePage = { backgroundColor: "red" };

  return (
    // Para craiação de estilização, utiliza como se fosse em chaves
    //<div style={estilosDaHomePage}>
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        {/* Aqui estou passando uma props */}
        <Timeline playlists={config.playlists} />
      </div>
    </>
  );
}
export default HomePage;

// Criar o style do componente
const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header() {
  // Para chamar variavies utiliza {}
  // Para comentar algo so dar ctrl K + ctrl C
  return (
    <StyledHeader>
      {/* <img src="banner" />*/}
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

// Aqui estou recendo os dados passados nessa variaveis props
function Timeline(props) {
  console.log(props.playlists);
  // Pegar os nomes das keys do object
  const playlistsNames = Object.keys(props.playlists);
  // Vai ser .map o tempo tempo!!
  return (
    <StyledTimeline>
      {playlistsNames.map((playlistsName) => {
        const videos = props.playlists[playlistsName];
        return (
          <section>
            <h2>{playlistsName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
