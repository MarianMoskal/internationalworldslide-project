import React from 'react';
import s from './Reviews.module.css';

export default function Reviews() {
  return (
    <section id="reviews" className={s.section}>
      <h2 className={s.heading}>Отзывы</h2>
      <div className={s.container}>
        <iframe
          className={s.review}
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0JPUUE12rWTW73G1yjaepByAAMNSVtdtJaYcqsstDjmt6oddTKbPNAQ6JcQ3GS6Axl%26id%3D100021463635043&show_text=true&width=500"
          // height="100%"
          style={{ border: 'none', overflow: 'hidden' }}
          title="a"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        <iframe
          className={s.review}
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmarina.onuchenko%2Fposts%2Fpfbid0i1QW8GRmyabioXJdQSGmJoDF2cJvyssFeUddqRV1zPyEWn2MJ8PZBGYWifAPX6MQl&show_text=true&width=500"
          // height="100%"
          style={{ border: 'none', overflow: 'hidden' }}
          title="b"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        <iframe
          className={s.review}
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02YMvP7YP6fdqijsk1f6rcTDupodmWhJxem6XfpCuAgCpq9ZrSmdWEKTPCPR5WgVd7l%26id%3D100022288246585&show_text=true&width=500"
          // height="100%"
          style={{ border: 'none', overflow: 'hidden' }}
          title="c"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        <iframe
          className={s.review}
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02f95TD9RkoL8Sm9QL3RM2n3cwBJ9g9MUahNARaVcrajGRhcedEhp8YLGTJBkkvMoal%26id%3D100018292536115&show_text=true&width=500"
          // height="100%"
          style={{ border: 'none', overflow: 'hidden' }}
          title="d"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <p className={s.paragraf}>
        Больше отзывов{' '}
        <a
          className={s.link}
          href="https://www.facebook.com/internationalworldslideiwl/reviews"
          target="_blank"
          rel="noreferrer"
        >
          здесь
        </a>
      </p>
    </section>
  );
}
