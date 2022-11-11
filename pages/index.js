import React from "react";
import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
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
      <CSSReset />
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

// Criar o style do componente
// const StyledHeader = styled.div`
//   .user-banner {
//     margin-top: 50px;
//     height: 230px;
//     width: 100%;
//     object-fit: cover;
//   }
//   .user-info {
//     img {
//       width: 80px;
//       height: 80px;
//       border-radius: 50%;
//     }
//     display: flex;
//     align-items: center;
//     width: 100%;
//     padding: 16px 32px;
//     gap: 16px;
//   }
// `;

// const StyledBanner = styled.div`
//   background-color: blue;
//   //background-image: url(${config.banner});
//   height: 230px;
// `;
// function Header(props) {
//   // Para chamar variavies utiliza {}
//   // Para comentar algo so dar ctrl K + ctrl C
//   console.log(props);
//   return (
//     <StyledHeader>
//       {/* <img
//         className="user-banner"
//         alt="Montanhas ao entardescer"
//         src={props.banner}
//       /> */}
//       <StyledBanner />
//       <section className="user-info">
//         <img src={`https://github.com/${config.github}.png`} />
//         <div>
//           <h2>{config.name}</h2>
//           <p>{config.job}</p>
//         </div>
//       </section>
//     </StyledHeader>
//   );
// }
