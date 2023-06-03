import React from 'react';
import { useYoutebeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';
import { formatAgo } from '../util/date';
import { v4 as uuidv4 } from 'uuid';

export default function Comment({ id }) {
  const { youtube } = useYoutebeApi();
  const {
    isLoading,
    error,
    data: comments,
  } = useQuery(['comment', id], async () => youtube.getComments(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <Loading />}
      {error && <p>에러발생했습니다.</p>}
      {comments && (
        <ul>
          {comments.map(
            ({
              textOriginal,
              authorProfileImageUrl,
              authorDisplayName,
              publishedAt,
              authorChannelId,
            }) => (
              <li className='flex mb-5' key={uuidv4()}>
                <div className='shrink-0'>
                  <img
                    src={authorProfileImageUrl}
                    alt={authorDisplayName}
                    className='w-10 h-10 rounded-full'
                  />
                </div>
                <div className='flex-1 ml-5'>
                  <p>
                    <b>{authorDisplayName}</b>
                    <span className='ml-3 text-sm'>
                      {formatAgo(publishedAt, 'ko')}
                    </span>
                  </p>
                  <pre className='whitespace-pre-wrap text-sm leading-6'>
                    {textOriginal}
                  </pre>
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
}
