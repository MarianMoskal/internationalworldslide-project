import Container from 'components/Main/Container/Container';
import s from './Home.module.css';
import ReactPlayer from 'react-player';
import ServicesRange from './ServicesRange';
import Languages from './Languages';
import { useState } from 'react';
import Reviews from './Reviews/Reviews';
import { Contacts } from './Contacts';

export default function Home() {
  const [visibleStyle, setVisibleStyle] = useState('none');

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
          // allow="autoplay; fullscreen"
          // allowFullScreen={true}
          width="100%"
          height="700px"
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
