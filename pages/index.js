import React from "react";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Header from "../src/components/Header";

// Esse é um meio base como um arquivo react funciona
// Para ele rodar,precisa estar em uma pasta chamada page
function HomePage() {
  // Criação de variaveis antes do return
  // const estilosDaHomePage = { backgroundColor: "red" };
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  //const valorDoFiltro = "s";

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
          playlists={config.playlists}
          favorites={config.favorites}
          searchValue={valorDoFiltro}
        />
      </div>
    </>
  );
}
export default HomePage;
