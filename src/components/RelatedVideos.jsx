import React from 'react';
import { useYoutebeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import Loading from './Loading';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutebeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['related', id], async () => await youtube.getRelated(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <Loading />}
      {error && <p>에러발생했습니다.</p>}
      {videos && (
        <ul className=''>
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}
