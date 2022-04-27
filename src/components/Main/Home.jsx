import Container from 'components/Main/Container/Container';
import s from './Home.module.css';
import ReactPlayer from 'react-player';
import ServicesRange from './ServicesRange';
import Languages from './Languages';

export default function Home() {
  return (
    <main className={s.div}>
      <ReactPlayer
        url="https://vimeo.com/692650084"
        width="100vw"
        height="700px"
        muted={true}
        playing={true}
        controls={true}
        config={{
          vimeo: {
            playerOptions: {
              // autoplay: true,
              // responsive: true,
              //   controls: true,
            },
          },
        }}
      />
      <Container>
        <ServicesRange />
        <Languages />
      </Container>
    </main>
  );
}
