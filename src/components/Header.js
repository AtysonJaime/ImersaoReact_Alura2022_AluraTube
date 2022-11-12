import styled from "styled-components";
import config from "../../config.json";

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
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

const StyledBanner = styled.div`
  background-color: blue;
  // Caso eu tenho uma configuração global, posso usar dessa maneira, ou passando por promps
  //background-image: url(${config.banner});
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 230px;
  width: 100%;
`;

export default function Header(props) {
  // Para chamar variavies utiliza {}
  // Para comentar algo so dar ctrl K + ctrl C
  return (
    <StyledHeader>
      <StyledBanner bg={props.banner} />
      <section className="user-info">
        <img src={`https://github.com/${props.github}.png`} />
        <div>
          <h2>{props.name}</h2>
          <p>{props.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
