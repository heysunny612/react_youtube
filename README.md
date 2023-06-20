# 리액트 프로젝트 미니 유튜브 사이트 만들기 

![ZCX](https://github.com/heysunny612/react_youtube/assets/127499117/137a8387-3e91-4f62-ae4b-63a530a10194)

<br/>

## 유투브 API를 이용한 검색기능 구현

 <br/>

```js
   //유투브 API 불러오는 코드
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

```
<br/>
<br/>

![SDSDSDS](https://github.com/heysunny612/react_youtube/assets/127499117/afd688be-f7fb-42db-a8b7-6c7ddceea1cd)


<br/>

## 유투브 API를 이용한 댓글, 관련있는 동영상 구현



<br/>

| 제목 | 설명 |
| --- | --- |
| 구현 사항 | -유투브 API 사용 동영상 불러오기 <br/> -동영상 검색 구현 <br/> -동영상 디테일 페이지 관련있는 동영상 불러오기 구현<br/> -동영상 디테일 페이지 댓글 불러오기 |
| 라이브러리 | axios, react-query, timeago.js ,react-loader-spinner |
| css 및 반응형  | tailwind css사용 , 반응형 구현 |
| 배포 주소  | Netlify [https://sunny-todos.netlify.app](https://sunnytube.netlify.app) |
| 소스 코드  | Github   https://github.com/heysunny612/react_youtube |


