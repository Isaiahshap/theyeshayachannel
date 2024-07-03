import { useEffect, useState } from 'react';
import {
  Container,
  StarField,
  Button,
  SevenSegmentDisplay,
  Divider,
} from 'retro-react';

function Home() {
  const [count, setCount] = useState(0);
  const [guestCount, setGuestCount] = useState(1);
  const [marqueePosition, setMarqueePosition] = useState(100);

  useEffect(() => {
    // Simulating a guest counter
    setGuestCount(Math.floor(Math.random() * 1000) + 1);

    // Marquee effect
    const marqueeInterval = setInterval(() => {
      setMarqueePosition((prevPos) => (prevPos <= -100 ? 100 : prevPos - 1));
    }, 50);

    return () => clearInterval(marqueeInterval);
  }, []);

  return (
    <>
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
          zIndex: 1,
        }}
      />
      <div className="retro-container">
        <Container>
          <header>
            <h1 className="moving-wordart">Welcome to Yeshaya's 90s Website!</h1>
          </header>
          <div className="marquee-container">
            <div className="marquee-text" style={{ left: `${marqueePosition}%` }}>
              🚀 Surf the information superhighway with style! 🌐 Grab your Palm Pilot and let's go! 📟
            </div>
          </div>
          <main>
            <div className="content-wrapper">
              <img src="https://web.archive.org/web/20090830005036/http://geocities.com/Area51/Corridor/5177/aniufotny.gif" alt="UFO" className="retro-img" />
              <p className="retro-text">Welcome to the yeshaya channel.</p>
              <Divider color="rainbow" orientation="horizontal" />
              <p className="retro-text">This place is my mind's little time capsule.</p>
              <Divider color="rainbow" orientation="horizontal" />
              <p className="retro-text">Make yourself at home.</p>
              <Divider color="rainbow" orientation="horizontal" />
              <p className="retro-text">In the good ol' days.</p>
              <Button className="retro-button neon-button" onClick={() => setCount(count + 69)}>
                <SevenSegmentDisplay
                  color="lime"
                  segmentThickness="thick"
                  value={count}
                />
              </Button>
              <p className="retro-text blink">which numbers have 69 in them?</p>
              <div className="guest-counter">
                <p>You are visitor number: {guestCount}</p>
              </div>
            </div>
            <div className="ad-section">
              <div className="retro-ad" style={{ borderColor: 'cyan' }}>
                <h3 style={{ color: 'cyan' }}>NEW! Pentium III</h3>
                <img src="https://web.archive.org/web/20090829232453/http://geocities.com/Tokyo/Fuji/1296/pentium.gif" alt="Pentium III" />
                <p>Blazing fast 500MHz processor!</p>
              </div>
              <div className="retro-ad" style={{ borderColor: 'magenta' }}>
                <h3 style={{ color: 'magenta' }}>AOL CD-ROM</h3>
                <img src="https://web.archive.org/web/20090830031745/http://geocities.com/Hollywood/Lot/6038/aol_gif.gif" alt="AOL CD-ROM" />
                <p>1000 FREE hours!</p>
              </div>
            </div>
          </main>
          <footer>
            <img
              src="https://web.archive.org/web/20090829225554/http://geocities.com/TimesSquare/Arcade/3183/construction.gif"
              alt="Under Construction"
              className="retro-img"
            />
            <p className="retro-text">© 1999 Yeshaya's Rad Website. Best viewed in Netscape Navigator.</p>
          </footer>
        </Container>
      </div>
    </>
  );
}

export default Home;