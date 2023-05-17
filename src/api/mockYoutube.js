import axios from 'axios';

export default class MockYoutube {
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async relatedVideos() {
    return axios.get(`/videos/related.json`).then((res) => res.data.items);
  }

  async channelImageURL() {
    return axios
      .get(`/videos/channel.json`)
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
