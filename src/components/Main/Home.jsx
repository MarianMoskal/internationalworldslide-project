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
            playerOptions: {},
          },
        }}
      />
      <Container>
        <ServicesRange />
        <Languages />
        {/* <iframe
          title="a"
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D131526466019591%26id%3D100074867145577&show_text=true&width=500"
          width="500"
          height="304"
          style={{
            border: 'none',
            overflow: 'hidden',
            color: '#f8eee7',
          }}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe> */}
      </Container>
    </main>
  );
}
