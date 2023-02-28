import { useState, useEffect } from 'react';
import styles from './Tracks.module.css';
import Image from 'next/image';
import { spotifyApi } from '@/libs/spotify-lib';

export default function Tracks() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    spotifyApi.getArtistAlbums('07WSvNqUYT3u5Hgkao5qiT', { limit: 10 })
      .then(data => {
        setTracks(data.items)
      })
      .catch(err => console.error(err));
  }, []);

  let rest = 4 - (tracks.length % 4);

  // add amout of rest to the start of a copy of the array
  let tracksCopy = [...tracks];
  let placeholder = (id) => ({
    id: `placeholder-${id}`,
    images: [{ url: '/img/placeholder.jpg' }],
    name: 'placeholder'
  });

  for (let i = 0; i < rest; i++) {
    tracksCopy.unshift(placeholder(i));
  }

  // if there are no tracks, return a loading message
  if (tracks.length === 0) {
    return <div className={styles.container}>
      <h1 className={styles.loading}>Loading tracks...</h1>
      {/* a funny comment */}
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image src='/img/placeholder.jpg' width={500} height={500} layout='responsive' alt='placeholder' />
        </div>
      </div>
    </div>
  }

  return (
    <div className={styles.container}>
      {tracksCopy.reduce((rows, track, index) => {
        if (index % 4 === 0) {
          rows.push([]);
        }
        rows[rows.length - 1].push(track);
        return rows;
      }, []).map((row, index) => (
        <div key={index} className={styles.imageContainer}>
          {row.map(track => (
            <div key={track.id} className={styles.image}>
              <Image src={track.images[0].url} width={500} height={500} layout='responsive' alt={track.name} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
