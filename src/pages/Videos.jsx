import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutebeApi } from '../context/YoutubeApiContext';
import Loading from '../components/Loading';

export default function Videos() {
  const { youtube } = useYoutebeApi();
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ['videos', keyword],
    async () => await youtube.getVideos(keyword),
    { staleTime: 1000 * 60 }
  );
  return (
    <section>
      {isLoading && <Loading />}
      {error && <p>에러발생했습니다.</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </ul>
      )}
    </section>
  );
}
