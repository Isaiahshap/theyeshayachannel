import { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Background,
  SevenSegmentDisplay,
  Pager,
  Divider,
  MouseTrail
} from 'retro-react';
import { createGlobalStyle } from 'styled-components';
import './App.css'

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
  const [playing, setPlaying] = useState(false);
  const [left, setLeft] = useState(100); // Starting position: 100% to the right

  useEffect(() => {
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio) {
      if (playing) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Failed to play:', error);
          });
        }
      } else {
        audio.pause();
      }
    }

    const timer = setInterval(() => {
      setLeft(prevLeft => {
        if (prevLeft < -100) { // Reset when text scrolls out completely
          return 100;
        }
        return prevLeft - 1;
      });
    }, 20); // Adjust speed by changing interval duration

    return () => clearInterval(timer);
  }, [playing]);

  const toggleMusic = () => {
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
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <MouseTrail
          offset={{ x: 0, y: 0 }}
          particleColor="rainbow"
          particleSize={5}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
        />
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
          <div style={{ textAlign: 'center', width: '100%', overflow: 'hidden' }}>
            <div style={{
              position: 'relative',
              left: `${left}%`,
              whiteSpace: 'nowrap',
              color: 'white'
            }}>
              The yeshaya channel
            </div>

            <Button onClick={toggleMusic}>
              {playing ? 'Pause Music' : 'Play Music'}
            </Button>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}>
              <Button onClick={() => setCount(count + 1)}>
                <SevenSegmentDisplay
                  color="white"
                  segmentThickness="none"
                  value={count}
                />
              </Button>
              <p>Stay tuned.</p>
              <div style={{
                display: 'flex',
                flexDirection: 'row'
              }}>
                <Pager
                color="greyscale-dark"
                messages={['Welcome', 'to', 'the', 'Good', "Ol'", 'Days']}
                onButtonPress={function noRefCheck(){}}
              />
              <img className='imac' src="https://web.archive.org/web/20030401014539im_/http://a772.g.akamai.net/7/772/51/c582cf249eee8e/www.apple.com/home/images/2003/03/promoimac03192003.gif" width="170" height="125" alt="The new iMac. 17-inch, 1GHz, iLife $1799"></img>
              </div>
            </div>
            <img
              src="https://web.archive.org/web/20050827040031im_/http://image.weather.com/web/common/banners/desktopsevere.gif"
              alt="weather banner"
              style={{
                position: 'relative',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          </div>
          <div>
            <p>Yesterday was a good day.</p>
            <Divider color="rainbow" orientation="horizontal" />
            <p>Today is a good day.</p>
            <Divider color="rainbow" orientation="horizontal" />
            <p>We are now in the past.</p>
            <Divider color="rainbow" orientation="horizontal" />
            <p>In the good ol' days.</p>
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
