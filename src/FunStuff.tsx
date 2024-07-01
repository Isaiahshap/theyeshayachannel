import React, { useState, useEffect } from 'react';

const FunStuff: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [guestbookEntries, setGuestbookEntries] = useState<string[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [hitCounter, setHitCounter] = useState(1337);
  const [isBlinking, setIsBlinking] = useState(false);
  const [visitorCount, setVisitorCount] = useState(42069);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setHitCounter(prev => prev + Math.floor(Math.random() * 10));
      setVisitorCount(prev => prev + Math.floor(Math.random() * 5));
    }, 5000);
    return () => clearInterval(counterInterval);
  }, []);

  const handleGuestbookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.trim()) {
      setGuestbookEntries([...guestbookEntries, newEntry.trim()]);
      setNewEntry('');
    }
  };

  const toggleBlink = () => {
    setIsBlinking(!isBlinking);
  };

  return (
    <div className="fun-stuff">
      <div className="starry-background"></div>
      <header className="fun-header">
        <h1 className="fun-title">90s Fun Zone</h1>
        <div className="digital-clock">{currentTime.toLocaleTimeString()}</div>
      </header>

      <nav className="web-ring">
        <a href="#prev">← Prev</a>
        <a href="#home">Home</a>
        <a href="#next">Next →</a>
      </nav>

      <main className="fun-content">
        <section className="guestbook-section">
          <div className="win95-window">
            <div className="win95-title-bar">
              <span>Guestbook.exe</span>
              <button className="win95-close-btn">X</button>
            </div>
            <div className="win95-content">
              <form onSubmit={handleGuestbookSubmit}>
                <input
                  type="text"
                  value={newEntry}
                  onChange={(e) => setNewEntry(e.target.value)}
                  placeholder="Sign the guestbook!"
                />
                <button type="submit">Submit</button>
              </form>
              <div className="guestbook-entries">
                {guestbookEntries.map((entry, index) => (
                  <p key={index}>{entry}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="fun-elements">
          <div className="hit-counter">
            <h3>Hit Counter</h3>
            <p>{hitCounter}</p>
          </div>

          <div className="visitor-counter">
            <h3>Visitors</h3>
            <p>{visitorCount}</p>
          </div>

          <div className="construction">
            <img src="/construction.gif" alt="Under Construction" />
          </div>

          <div className="wordart-container">
            <div className="wordart">Welcome to my fun page!</div>
          </div>

          <div className="fun-button-container">
            <button
              className={`fun-button ${isBlinking ? 'blink' : ''}`}
              onClick={toggleBlink}
            >
              Click for Fun!
            </button>
          </div>

          <div className="marquee">
            <p>Welcome to the coolest page on the web! Surf's up, dude!</p>
          </div>

          <div className="gif-collection">
            <img src="/dancing-baby.gif" alt="Dancing Baby" />
            <img src="/flames.gif" alt="Flames" />
            <img src="/envelope.gif" alt="Email" />
            <img src="/new.gif" alt="New" />
            <img src="/hot.gif" alt="Hot" />
            <img src="/cool.gif" alt="Cool" />
          </div>

          <div className="banner-ads">
            <img src="/banner-ad1.gif" alt="Banner Ad 1" />
            <img src="/banner-ad2.gif" alt="Banner Ad 2" />
          </div>

          <div className="poll">
            <h3>Daily Poll</h3>
            <p>What's your favorite 90s band?</p>
            <form>
              <label><input type="radio" name="band" value="nirvana" /> Nirvana</label>
              <label><input type="radio" name="band" value="backstreet-boys" /> Backstreet Boys</label>
              <label><input type="radio" name="band" value="spice-girls" /> Spice Girls</label>
              <button type="submit">Vote!</button>
            </form>
          </div>

          <div className="midi-player">
            <h3>Background Music</h3>
            <audio controls loop>
              <source src="/90s-midi.mid" type="audio/midi" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="guestmap">
            <h3>Where are you from?</h3>
            <img src="/world-map.gif" alt="Guest Map" />
          </div>

          <div className="awards">
            <img src="/award1.gif" alt="Web Award 1" />
            <img src="/award2.gif" alt="Web Award 2" />
            <img src="/award3.gif" alt="Web Award 3" />
          </div>
        </section>
      </main>

      <footer className="fun-footer">
        <div className="ticker">
          This page is best viewed in Netscape Navigator at 800x600 resolution • Don't forget to sign my guestbook! • Last updated: 4/20/1999
        </div>
      </footer>
    </div>
  );
};

export default FunStuff;