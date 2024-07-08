import React from 'react';
import { StarField } from 'retro-react';
import GameBoy from './Gameboy';
import './App.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-background"></div>
      <StarField
        numStars={3000}
        size={2}
        speed={1}
        starColor="white"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />
      <div className="main-content">
        <div className="gameboy-wrapper">
          <GameBoy defaultPoweredOn={true}>
            <iframe 
              src="https://microstudio.io/HomineLudens/marblequest/" 
              style={{width: '100%', height: '100%', border: 'none'}}
              title="Marble Quest Game"
            />
          </GameBoy>
        </div>
      </div>
    </div>
  );
};

export default Home;