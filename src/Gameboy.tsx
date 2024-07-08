import React, { useState, useEffect } from 'react';
import "./Gameboy.css";

interface GameBoyProps {
  defaultPoweredOn?: boolean;
  children: React.ReactNode;
}

const GameBoy: React.FC<GameBoyProps> = ({ defaultPoweredOn = false, children }) => {
  const [isPoweredOn, setIsPoweredOn] = useState(defaultPoweredOn);
  const [bootSequence, setBootSequence] = useState(false);
  const [nintendoLogo, setNintendoLogo] = useState(false);

  useEffect(() => {
    if (isPoweredOn) {
      setBootSequence(true);
      setTimeout(() => {
        setBootSequence(false);
        setNintendoLogo(true);
      }, 1000);
      setTimeout(() => {
        setNintendoLogo(false);
      }, 3000);
    } else {
      setBootSequence(false);
      setNintendoLogo(false);
    }
  }, [isPoweredOn]);

  const handlePowerToggle = () => {
    setIsPoweredOn(!isPoweredOn);
  };

  return (
    <div className="gameboy">
      <div className="gameboy-body">
        <div className="screen-section">
          <div className="screen-border">
            <div className="screen-power-text">BATTERY</div>
            <div className={`screen ${isPoweredOn ? 'powered-on' : ''}`}>
              {bootSequence && <div className="boot-sequence"></div>}
              {nintendoLogo && <div className="nintendo-logo">Skintendo®</div>}
              {!bootSequence && !nintendoLogo && isPoweredOn && (
                <div className="screen-content">{children}</div>
              )}
            </div>
          </div>
          <div className="brand-text">
            <span className="dot-matrix-text">DOT MATRIX WITH STEREO SOUND</span>
          </div>
        </div>

        <div className="controls-section">
          <div className="d-pad">
            <div className="d-pad-horizontal"></div>
            <div className="d-pad-vertical"></div>
          </div>

          <div className="action-buttons">
            <button className="button-a">A</button>
            <button className="button-b">B</button>
          </div>
        </div>

        <div className="bottom-section">
          <div className="start-select-buttons">
            <button className="button-start">START</button>
            <button className="button-select">SELECT</button>
          </div>

          <div className="speaker">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="speaker-hole"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="nintendo-brand">Skintendo<span className="registered">®</span> SKAME BOY<span className="tm">™</span></div>

      <div className="power-switch-area">
        <div className="power-text">OFF • ON</div>
        <div className={`power-switch ${isPoweredOn ? 'on' : 'off'}`} onClick={handlePowerToggle}></div>
      </div>

      <div className="headphone-jack">PHONES</div>
      <div className="volume-control">
        <div className="volume-slider"></div>
      </div>
    </div>
  );
};

export default GameBoy;