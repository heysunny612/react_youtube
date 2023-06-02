import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
// import FakeYoutubeClient from '../api/fakeYoutubeClient';
import YoutubeClient from '../api/youtubeClient';

const YoutubeApiContext = createContext();

const realClient = new YoutubeClient();
// const client = new FakeYoutubeClient();
const youtube = new Youtube(realClient);

export const YoutubeApiProvider = ({ children }) => {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
};

export const useYoutebeApi = () => useContext(YoutubeApiContext);
