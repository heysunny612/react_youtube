export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  getVideos(keyword) {
    return keyword ? this.#getSearch(keyword) : this.#getPopular();
  }

  async #getSearch(keyword) {
    return await this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async #getPopular() {
    return await this.apiClient
      .videos({
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
        },
      })
      .then((res) => res.data.items);
  }

  async getChannel(channelId) {
    return await this.apiClient
      .channel({
        params: {
          part: 'snippet',
          id: channelId,
        },
      })
      .then((res) => res.data.items[0].snippet);
  }

  async getRelated(videoId) {
    return await this.apiClient
      .related({
        params: {
          part: 'snippet',
          maxResults: 25,
          relatedToVideoId: videoId,
          type: 'video',
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async getComments(videoId) {
    return await this.apiClient
      .comments({
        params: {
          part: 'snippet',
          videoId,
          maxResults: 20,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({
          ...item.snippet.topLevelComment.snippet,
        }))
      );
  }
}
