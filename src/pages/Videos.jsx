import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import VideoCard from '../components/VideoCard/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));
  return (
    <div>
      {isLoading && <p>아직로딩중입니다.</p>}
      {error && <p>에러발생</p>}
      {videos && (
        <ul className='videos'>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
      ;
      {keyword ? `${keyword} 검색 결과입니다.⭐` : '핫트랜드 검색결과 입니다❤️'}
      <Link to='/videos/watch/video'>상세보러가기</Link>
    </div>
  );
}
