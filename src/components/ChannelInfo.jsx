import React from 'react';
import { useYoutebeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutebeApi();
  const {
    error,
    isLoading,
    data: channel,
  } = useQuery(['channel', id], async () => await youtube.getChannel(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div className='flex my-4 mb-8 items-center'>
      {isLoading && <Loading />}
      {error && <p>Error</p>}
      {channel && (
        <img
          src={channel.thumbnails.default.url}
          alt={name}
          className='w-12 h-12 rounded-full'
        />
      )}
      <p className='text-lg font-medium ml-2'>{name}</p>
    </div>
  );
}

// url을 가지고오지 못했거나(error), error가 났을때 채널에 앞글자만 따서 떰네일로만들기
