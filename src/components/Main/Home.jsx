import Container from 'components/Main/Container/Container';
import s from './Home.module.css';
import ReactPlayer from 'react-player';
import ServicesRange from './ServicesRange';
import Languages from './Languages';
import { useEffect, useState } from 'react';
import Reviews from './Reviews/Reviews';
import Contacts from './Contacts/Contacts';

export default function Home() {
  const [visibleStyle, setVisibleStyle] = useState('none');
  const [playerHeight, setPlayerHeight] = useState('500px');

  useEffect(() => {
    if (window.innerHeight) {
      const windowHeight = window.innerHeight;

      setPlayerHeight(`${windowHeight - 150}px`);
    }
  }, []);

  const handlePauseEnd = () => {
    setVisibleStyle('block');
  };

  const handlePlay = () => {
    setVisibleStyle('none');
  };

  return (
    <main className={s.div}>
      <div className={s.playerWrapper}>
        <ReactPlayer
          className={s.reactPlayer}
          url="https://vimeo.com/692650084"
          // allow="autoplay"
          // allowFullScreen={true}
          playsinline
          width="100%"
          height={playerHeight}
          muted={true}
          playing={true}
          controls={true}
          onEnded={handlePauseEnd}
          onPlay={handlePlay}
          onPause={handlePauseEnd}
          config={{
            vimeo: {
              playerOptions: {},
            },
          }}
        />
        <button
          style={{ display: visibleStyle }}
          className={s.heroButton}
          type="button"
        >
          <a
            className={s.link}
            href="https://m.me/internationalworldslideiws"
            target="blank"
            noreffer="noopener"
          >
            {' '}
            Узнать цену
          </a>
        </button>
      </div>
      <Container>
        <ServicesRange />
        <Languages />
        <Reviews />
        <Contacts />
      </Container>
    </main>
  );
}
