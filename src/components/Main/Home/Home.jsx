import Container from 'components/Main/Container/Container';
import s from './Home.module.css';
import ReactPlayer from 'react-player';

export default function Home() {
  return (
    <main className={s.div}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        height="700px"
        muted={true}
        playing={true}
        controls={true}
      />
      <Container>{/* <h2>Hello world</h2> */}</Container>
    </main>
  );
}
