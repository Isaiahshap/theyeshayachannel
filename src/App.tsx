import { useState } from 'react';
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
            <div className="card">
              <Button onClick={() => setCount((count) => count + 1)}>
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
    </>
  );
}

export default App;
