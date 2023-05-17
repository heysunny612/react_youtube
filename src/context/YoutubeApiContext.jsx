import React, { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
//import MockYoutube from '../api/mockYoutube';
export const YoutubeApiContext = createContext();
//new MockYoutube();
const youtube = new Youtube();
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
