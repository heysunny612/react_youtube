import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({
  video,
  video: {
    id: videoId,
    snippet: {
      title,
      publishedAt,
      channelTitle,
      channelId,
      thumbnails: { medium },
    },
  },
  type,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${videoId}`, { state: { video } });
  };
  const isList = type === 'list';
  return (
    <li
      onClick={handleClick}
      role='button'
      className={isList ? 'flex gap-1 m-2' : ''}
    >
      <img
        src={medium.url}
        alt={title}
        className={isList ? 'w-60 mr-4' : 'w-full '}
      />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
