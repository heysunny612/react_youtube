import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
import Comment from '../components/Comment';
export default function VideoDetail() {
  const {
    state: {
      video: {
        id: videoId,
        snippet: { channelId, channelTitle, description, title },
      },
    },
  } = useLocation();

  return (
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe
          className='w-full h-96 lg:h-1/6'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        <div className='lg:p-8 py-8'>
          <h2 className='text-xl font-bold'>{title}</h2>{' '}
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='whitespace-pre-wrap bg-zinc-800 p-3 rounded-xl'>
            {description}
          </pre>
        </div>
        <div className='lg:p-8 py-8'>
          <Comment id={videoId} />
        </div>
      </article>
      <section className='basis-2/6'>
        <RelatedVideos id={videoId} />
      </section>
    </section>
  );
}
