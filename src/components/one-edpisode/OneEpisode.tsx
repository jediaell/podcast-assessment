import { useOnePodcastEpisode } from "../../hooks/useOnePodcastEpisode"
import {
  ComponentContainer,
  PodcasterInfo,
  EpisodeInfo,
  Button,
} from "./OneEpisdoe.styles"
// @ts-ignore
import { Bars } from "svg-loaders-react"

type Params = {
  id: string
  trackId: string
}

const OneEpisode = ({ trackId, id }: Params) => {
  const { episode, loading, error } = useOnePodcastEpisode(id, trackId)
  return (
    <>
      {/* Go to previous page */}
      <Button onClick={() => window.history.back()}>Go back</Button>
      <ComponentContainer>
        {loading && <Bars fill="#000" />}
        {error && <p>Error...</p>}

        <PodcasterInfo>
          {/* Here we define the episode info */}
          <img src={episode[1]?.artworkUrl160} alt="episode artwork" />
          <h1>{episode[0]?.artistName}</h1>
          <h3>{episode[0]?.collectionName}</h3>
          <ul>
            {episode[0]?.genres.map((genre: any) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </PodcasterInfo>
        <EpisodeInfo>
          {/* Here we define the episode info and the audio player */}
          <h1>{episode[1]?.trackName}</h1>
          <p>{episode[1]?.shortDescription}</p>
          {episode[1]?.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
          <audio src={episode[1]?.previewUrl} controls />
        </EpisodeInfo>
      </ComponentContainer>
    </>
  )
}

export default OneEpisode
