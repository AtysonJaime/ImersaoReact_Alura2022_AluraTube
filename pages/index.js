import React from "react";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Header from "../src/components/Header";
import { videoService } from "../src/services/videoService";

// Esse é um meio base como um arquivo react funciona
// Para ele rodar,precisa estar em uma pasta chamada page
function HomePage() {
  // Criação de variaveis antes do return
  // const estilosDaHomePage = { backgroundColor: "red" };
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  const [playlists, setPlaylist] = React.useState({});
  //const valorDoFiltro = "s";

  const serviceVideo = videoService();
  React.useEffect(() => {
    serviceVideo
      .getAllVideos()
      .then((res) => {
        // Adiciona a playlist antiga em uma variavel
        const novasPlaylists = { ...playlists };
        // Adiciona os novos dados a playlist
        res.data.forEach((video) => {
          if (!novasPlaylists[video.playlist])
            novasPlaylists[video.playlist] = [];
          novasPlaylists[video.playlist].push(video);
        });
        setPlaylist(novasPlaylists);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    // Para craiação de estilização, utiliza como se fosse em chaves
    // <div style={estilosDaHomePage}>
    <>
      <div>
        {/* Prop Drilling*/}
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header
          banner={config.banner}
          name={config.name}
          github={config.github}
          job={config.job}
        />
        {/* Aqui estou passando uma props */}
        <Timeline
          playlists={playlists}
          favorites={config.favorites}
          searchValue={valorDoFiltro}
        />
      </div>
    </>
  );
}
export default HomePage;
