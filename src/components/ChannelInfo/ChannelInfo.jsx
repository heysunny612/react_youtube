import React from 'react';
import styles from './ChannelInfo.module.css';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: url,
  } = useQuery(['channel', id], () => youtube.channelImageURL(id));
  return (
    <div className={styles.channel}>
      {url && <img src={url} alt={title} />}
      <p className={styles.title}>{title}</p>
    </div>
  );
}
