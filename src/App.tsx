import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import FunStuff from './FunStuff';
import Weather from './Weather'; 
import { createGlobalStyle } from 'styled-components';
import './App.css';
import {
  Navbar,
  NavLogo,
  NavItem,
  Button,
  MouseTrail  
} from 'retro-react'; 

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  * {
    box-sizing: border-box;
  }
`;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(mobile);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return isMobile;
}

function App() {
  const [playing, setPlaying] = useState(false);
  const [left, setLeft] = useState(100);
  const isMobile = useIsMobile();

  useEffect(() => {
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio) {
      if (playing) {
        audio.play().catch(error => {
          console.error('Failed to play:', error);
        });
      } else {
        audio.pause();
      }
    }

    const timer = setInterval(() => {
      setLeft(prevLeft => (prevLeft < -100 ? 100 : prevLeft - 1));
    }, 20);

    return () => clearInterval(timer);
  }, [playing]);

  const toggleMusic = () => {
    setPlaying(!playing);
  };

  return (
    <Router>
      <GlobalStyle />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar color="primary" pattern="stars" style={{ width: '100%', position: 'fixed', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000 }}>
          <NavLogo>
            <div className="marquee-container">
              <div className="marquee-text neon-text" style={{ left: `${left}%` }}>
                The Yeshaya Channel
              </div>
            </div>
          </NavLogo>
          <Button onClick={toggleMusic} className="neon-button" style={{ margin: '0 auto' }}>
            {playing ? 'Pause Music' : 'Play Music'}
          </Button>
          <div style={{ display: 'flex' }}>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/funstuff">Fun Stuff</Link>
            </NavItem>
            <NavItem>
              <Link to="/weather">Check your weather!</Link>
            </NavItem>
          </div>
        </Navbar>
        {!isMobile && (
          <MouseTrail
            offset={{ x: 0, y: 0 }}
            particleColor="rainbow"
            particleSize={7}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 100
            }}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funstuff" element={<FunStuff />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
        <audio id="background-music" loop>
          <source src="/vaporwavemix.m4a" type="audio/mp4" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </Router>
  );
}

export default App;