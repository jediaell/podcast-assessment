import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import OnePodcastInfo from "./pages/solo-podcast/OnePodcastInfo"
import SoloEpisode from "./pages/solo-episode/SoloEpisode"
import GlobalStyle from "./components/GlobalStyle"

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:id" element={<OnePodcastInfo />} />
        <Route path="/podcast/:id/episode/:trackId" element={<SoloEpisode />} />
      </Routes>
    </div>
  )
}

export default App
