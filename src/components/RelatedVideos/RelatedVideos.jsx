import React from 'react';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../VideoCard/VideoCard';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: realtedVideos,
  } = useQuery(['related', id], () => youtube.relatedVideos(id));
  return (
    <>
      {isLoading && <p>아직로딩중입니다.</p>}
      {error && <p>에러발생</p>}
      <ul>
        {realtedVideos &&
          realtedVideos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} type='list' />
          ))}
      </ul>
    </>
  );
}
