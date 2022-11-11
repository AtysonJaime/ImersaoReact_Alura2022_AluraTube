import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
    .card-favorites {
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        span {
          padding-right: 0;
        }
      }
    }
  }
`;

// Aqui estou recendo os dados passados nessa variaveis props
export default function Timeline(props) {
  // Pegar os nomes das keys do object
  const playlistsNames = Object.keys(props.playlists);
  const canaisFavorites = props.favorites;
  // Vai ser .map o tempo tempo!!
  return (
    <StyledTimeline>
      {playlistsNames.map((playlistsName) => {
        const videos = props.playlists[playlistsName];
        return (
          <section key={playlistsName}>
            <h2>{playlistsName}</h2>
            <div>
              {videos.map((video) => (
                <a
                  href={video.url}
                  key={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={video.thumb} />
                  <span>{video.title}</span>
                </a>
              ))}
            </div>
          </section>
        );
      })}
      <section>
        <h2>Canais Favoritos</h2>
        <div className="card-favorites">
          {canaisFavorites.map((card) => (
            <a
              href={card.url}
              key={card.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={card.userImage} />
              <span>{card.name}</span>
            </a>
          ))}
        </div>
      </section>
    </StyledTimeline>
  );
}
