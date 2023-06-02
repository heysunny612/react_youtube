import React from 'react';

const footer = [
  '정보보도자료',
  '저작권문의하기',
  '크리에이터광고개발자약관',
  '개인정보처리방침정책',
];

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center text-center py-10 mt-20 border-t  border-zinc-600 text-xs text-zinc-600'>
      <ul className='flex justify-center gap-x-5 mb-5'>
        {footer.map((value, index) => (
          <li key={index} className='hover:text-zinc-400 cursor-pointer'>
            {value}
          </li>
        ))}
      </ul>
      <p className='leading-5'>
        © 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain
        View CA 94043, USA, 0807-882-594 (무료),
        yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보,
        불법촬영물 신고 크리에이터들이 유튜브 상에 게시, 태그 또는 추천한
        상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을
        판매하지 않으며, 그에 대한 책임을 지지 않습니다.
      </p>
    </footer>
  );
}
