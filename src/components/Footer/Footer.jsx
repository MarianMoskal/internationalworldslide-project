import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.div}>
      <p>&copy;internationalworldslide, 2022</p>
      <p className={s.text}>
        The community for cultural relations and educational opportunities of
        Ukraine and France <br /> &#x1F499; Kyiv, Paris &#x1F49B;
      </p>
    </footer>
  );
}
