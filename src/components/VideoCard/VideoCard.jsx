import React from 'react';
import styles from './VideoCard.module.css';
import { formatAgo } from '../../util/data';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video, type }) {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;
  const navigate = useNavigate();
  const handleClick = () =>
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  return (
    <li
      className={type ? `${styles.video} ${styles[type]}` : `${styles.video}`}
      onClick={handleClick}
      role='button'
    >
      <div className={styles.videoImage}>
        <img src={thumbnails.medium.url} alt={title} />
      </div>
      <div className={styles.videoInfo}>
        <p className={styles.title}>{title}</p>
        <p className={styles.channel}>{channelTitle}</p>
        <p className={styles.time}>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
