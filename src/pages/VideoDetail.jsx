import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos/RelatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, description, channelId, channelTitle } = video.snippet;
  const { videoId } = useParams();
  return (
    <section className='video-detail-wrapper'>
      <article className='video-datail'>
        <iframe
          width='100%'
          height='540'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        <div className='video-detail-info'>
          <p className='video-detail-title'>{title}</p>
          <ChannelInfo id={channelId} title={channelTitle} />
          <pre className='video-detail-description'>{description}</pre>
        </div>
      </article>
      <section className='related-video'>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
