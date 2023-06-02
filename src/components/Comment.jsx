import React from 'react';
import { useYoutebeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

export default function Comment({ id }) {
  const { youtube } = useYoutebeApi();
  const {
    isLoading,
    error,
    data: comments,
  } = useQuery(['comment', id], async () => youtube.getComments(id));

  return (
    <>
      {isLoading && <Loading />}
      {error && <p>에러발생했습니다.</p>}
      <div></div>
    </>
  );
}
