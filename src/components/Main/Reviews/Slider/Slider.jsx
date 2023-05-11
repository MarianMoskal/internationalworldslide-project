import React, { useState } from 'react';
import s from './Slider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { reviews } from 'db/reviews';

const renderSlides = reviews.map(({ src, title }) => (
  <iframe
    key={title}
    className={s.review}
    src={src}
    title={title}
    style={{
      border: 'none',
      overflow: 'hidden',
      borderRadius: '10px',
      marginTop: '20px',
    }}
  ></iframe>
));

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState();

  const handleChange = index => {
    setCurrentIndex(index);
  };

  return (
    <div className={s.wrapper}>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={reviews[currentIndex]}
        onChange={handleChange}
        showThumbs={false}
        className={s.carouselContainer}
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}
