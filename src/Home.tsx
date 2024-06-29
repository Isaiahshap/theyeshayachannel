import { useEffect, useState } from 'react';
import {
  Container,
  Background,
  SevenSegmentDisplay,
  Divider,
  StarField,
  Button,
  Pager
} from 'retro-react';

function Home() {
  const [count, setCount] = useState(0);
  const [_left, setLeft] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setLeft(prevLeft => {
        if (prevLeft < -100) {
          return 100;
        }
        return prevLeft - 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <StarField
        numStars={1000}
        size={2}
        speed={1}
        starColor="white"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
      <div className="retro-container">
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            width: '55vw',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            height: 'calc(100vh + 100px)',
            marginTop: '80px',
          }}
        >
          <Background
            color="#000000"
            backgroundImage="https://eol.jsc.nasa.gov/Collections/EarthArt/img/CloudsSaudiArabia/ISS047-E-57170-57184_preview.jpg"
            backgroundPosition="center center"
            backgroundRepeat="repeat"
            backgroundSize="cover"
          >
            <div className="content-wrapper">
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
              }}>
                <div className="retro-text">
                  <p>Welcome to the yeshaya channel.</p>
                  <Divider color="rainbow" orientation="horizontal" />
                  <p>This place is my mind's little time capsule.</p>
                  <Divider color="rainbow" orientation="horizontal" />
                  <p>Make yourself at home.</p>
                  <Divider color="rainbow" orientation="horizontal" />
                  <p>In the good ol' days.</p>
                </div>
                <Button className="retro-button neon-button" onClick={() => setCount(count + 69)}>
                  <SevenSegmentDisplay
                    color="white"
                    segmentThickness="none"
                    value={count}
                  />
                </Button>
                <p className="retro-text blink">which numbers have 69 in them?</p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                  <Pager
                    color="greyscale-dark"
                    messages={['Sometimes', 'the', 'future', 'helps', 'us', 'experience', 'the', 'past.']}
                    onButtonPress={function noRefCheck(){}}
                  />
                  <img src="https://web.archive.org/web/20030401014539im_/http://a772.g.akamai.net/7/772/51/c582cf249eee8e/www.apple.com/home/images/2003/03/promoimac03192003.gif" width="170" height="125" alt="The new iMac. 17-inch, 1GHz, iLife $1799" className="retro-img" />
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
                className="retro-img"
              />
            </div>
          </Background>
        </Container>
      </div>
    </>
  );
}

export default Home;
