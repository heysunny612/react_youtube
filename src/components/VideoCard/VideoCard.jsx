import React from 'react';
import styles from './VideoCard.module.css';
export default function VideoCard({ video }) {
  return (
    <li className={styles.video}>
      <img src={video.snippet.thumbnails.high.url} alt='' />
      <span className={styles.title}>{video.snippet.title}</span> <br />
      <span className={styles.channel}>{video.snippet.channelTitle}</span>{' '}
      <br />
      <span className={styles.time}>{video.snippet.publishedAt}</span>
    </li>
  );
}
