import React, { useState } from "react";
import VLCService from "./VLCService";

import "./App.css";
import RadioStationsList from "./RadioStation";
import CDPlayerControlBar from "./CDPlayerControlBar";

function App() {
  const [streamUrl, setStreamUrl] = useState("");

  const handlePlayClick = async () => {
    try {
      await VLCService.play(streamUrl);
    } catch (error) {
      console.error("Error playing stream:", error);
      alert("Error playing stream.");
    }
  };

  const handleStopClick = async () => {
    try {
      await VLCService.stop();
    } catch (error) {
      console.error("Error stopping stream:", error);
      alert("Error stopping stream.");
    }
  };

  const handleVolumeUpClick = async () => {
    try {
      await VLCService.volumeUp();
    } catch (error) {
      console.error("Error increasing volume:", error);
      alert("Error increasing volume.");
    }
  };

  const handleVolumeDownClick = async () => {
    try {
      await VLCService.volumeDown();
    } catch (error) {
      console.error("Error decreasing volume:", error);
      alert("Error decreasing volume.");
    }
  };

  const handleVolumeMuteClick = async () => {
    try {
      await VLCService.volumeMute();
    } catch (error) {
      console.error("Error decreasing volume:", error);
      alert("Error decreasing volume.");
    }
  };

  return (
    <div className="App">
      <RadioStationsList></RadioStationsList>
      <CDPlayerControlBar/>
      
      <h1>VLC MP3 Stream Player</h1>
      <input
        type="text"
        placeholder="Enter stream URL"
        value={streamUrl}
        onChange={(e) => setStreamUrl(e.target.value)}
      />
      <button onClick={handlePlayClick}>Play</button>
      <button onClick={handleStopClick}>Stop</button>
      <button onClick={handleVolumeUpClick}>Volume Up</button>
      <button onClick={handleVolumeDownClick}>Volume Down</button>
      <button onClick={handleVolumeMuteClick}>Mute</button>
    </div>
  );
}
export default App;
