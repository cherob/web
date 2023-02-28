import Image from '@/components/Image';
import styles from './Links.module.scss';

export default function Links({ children }) {
  // dynamic image size
  const size = '40em';

  return (
    <div className={styles.container}>
      <a href='https://open.spotify.com/artist/07WSvNqUYT3u5Hgkao5qiT?si=kp-boHjkTdKlMvOMEJlFxg'>
        <img
          src='/img/artist/spotify-svgrepo-com.svg'
          alt='spotify'
          width={size}
          height={size}
          className={styles.link}
        />
      </a>
      <a href='https://soundcloud.com/drumnicorn'>
        <img
          src='/img/artist/soundcloud-svgrepo-com.svg'
          alt='soundcloud'
          width={size}
          height={size}
          className={styles.link}
        />
      </a>
      <a href='https://www.youtube.com/@drumnicorn'>
        <img
          src='/img/artist/youtube-svgrepo-com.svg'
          alt='youtube'
          width={size}
          height={size}
          className={styles.link}
        />
      </a>
      <a href='https://www.instagram.com/drumnicorn/'>
        <img
          src='/img/artist/instagram-svgrepo-com.svg'
          alt='instagram'
          width={size}
          height={size}
          className={styles.link}
        />
      </a>
    </div>
  );
}
