import Container from 'components/Main/Container/Container';
import s from './Home.module.css';
import ReactPlayer from 'react-player';
import ServicesRange from './ServicesRange';
import Languages from './Languages';
import { useState } from 'react';
import Reviews from './Reviews/Reviews';

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
          Узнать цену
        </button>
      </div>
      <Container>
        <ServicesRange />
        <Languages />
        <Reviews />
      </Container>
    </main>
  );
}
