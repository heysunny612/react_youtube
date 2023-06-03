import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch, BsGithub } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SearchHeader() {
  const [search, setSearch] = useState();
  const { keyword } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${search}`);
  };

  useEffect(() => {
    setSearch(keyword || '');
  }, [keyword]);

  return (
    <header className='flex flex-col gap-y-5 w-full p-4 text-2xl border-b  border-zinc-600 mb-4 justify-between items-center lg:flex-row'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand' />{' '}
        <h1 className='font-bold ml-2 text-3xl'>Youtube </h1>
      </Link>

      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <input
          className='w-full p-2 outline-none bg-black text-gray-50 lg:w-7/12'
          type='text'
          value={search || ''}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search..'
        />
        <button type='submit' className='bg-zinc-600 px-4'>
          <BsSearch />
        </button>
      </form>
      <a
        href='https://github.com/heysunny612/react_youtube'
        target='_blank'
        rel='noreferrer'
        className='text-2xl absolute right-5 lg:relative'
      >
        <BsGithub />
      </a>
    </header>
  );
}
