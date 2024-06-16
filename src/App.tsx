import { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Background,
  SevenSegmentDisplay,
  Pager,
} from 'retro-react';
import { createGlobalStyle } from 'styled-components';

import './App.css';

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  * {
    box-sizing: border-box;
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const [playing, setPlaying] = useState(false);  // Start with music off

  useEffect(() => {
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    // Ensure audio element is available
    if (audio) {
      // Handle play/pause based on user interaction
      if (playing) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Handle any errors that occur during playback
            console.error('Failed to play:', error);
            // Optional: Automatically retry or inform the user
          });
        }
      } else {
        audio.pause();
      }
    }
  }, [playing]);

  const toggleMusic = () => {
    // Toggle the playing state
    setPlaying(!playing);
  };

  return (
    <>
      <GlobalStyle />
      <Container
        sx={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'continent',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Background
          backgroundImage="https://eol.jsc.nasa.gov/Collections/EarthArt/img/CloudsSaudiArabia/ISS047-E-57170-57184_preview.jpg"
          backgroundPosition="center center"
          backgroundRepeat="repeat"
          backgroundSize="cover"
          color="#000000"
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h1>The yeshaya channel</h1>
            <Button onClick={toggleMusic}>
              {playing ? 'Pause Music' : 'Play Music'}
            </Button>
            <div className="card">
              <Button onClick={() => setCount(count + 1)}>
                <SevenSegmentDisplay
                  color="white"
                  segmentThickness="none"
                  value={count}
                />
              </Button>
              <p>Stay tuned.</p>
              <Pager
                color="greyscale-dark"
                messages={['Welcome', 'to', 'the', 'Good', "Ol'", 'Days']}
                onButtonPress={function noRefCheck() {}}
              />
            </div>
            <img
              src="https://web.archive.org/web/20050827040031im_/http://image.weather.com/web/common/banners/desktopsevere.gif"
              alt="weather banner"
              style={{
                position: 'fixed',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          </div>
        </Background>
      </Container>
      <audio id="background-music" loop>
        <source src="/music.m4a" type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

export default App;
