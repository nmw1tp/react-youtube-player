import './App.css';
import React, { useState } from 'react';
import YouTubePlayer from './/components/youtube-player/youtube-player';

function App() {
  const [videoId, setVideoId] = useState('');

  function handleChange(event) {
    setVideoId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
      <div className={"container mt-5"}>
        <form onSubmit={handleSubmit}>
          <label>
            <h1 className={"pos"}>Введите ссылку на видео :</h1>
            <input className={"pst"} type="text" value={videoId} onChange={handleChange} />
          </label>
          <input className={"btn btn-outline-danger"} type="submit" value="Загрузить видео" />
        </form>
        {videoId && <YouTubePlayer videoId={videoId} />}
      </div>
  );
}

export default App;

