import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;

  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

// Sempre chama o mais em cima primeiro para depois chamar os internos
// Home
// Menu
// Search
// Informação sempre desce

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
  // Pegar o estado inicial do React
  // Quando eu possua uma alteração, por exemplo com um on change, apenas o valor da posição zero é alterado, devido a função na posição 1
  //const [valorDaBusca, setValorDaBusca] = React.useState("Frost");
  //console.log(valorDaBusca);
  const valorDaBusca = valorDoFiltro;
  const setValorDaBusca = setValorDoFiltro;
  return (
    <StyledSearch>
      {/* Para pegar o evento, por exemplo de mudança na página, utiliza on e a função */}
      <input
        type="text"
        value={valorDaBusca}
        onChange={(e) => {
          setValorDaBusca(e.target.value);
        }}
      />
      <button>🔎</button>
    </StyledSearch>
  );
}
