import React, { useEffect, useState } from 'react';
import styles from './Search.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsSearch, BsYoutube } from 'react-icons/bs';

export default function Search() {
  const [search, setSearch] = useState('');
  const { keyword } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length === 0) return;
    navigate(`/videos/${search}`);
  };
  useEffect(() => setSearch(keyword || ''), [keyword]);
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to='/'>
          <BsYoutube />
          <span className={styles.title}>YouTube</span>
        </Link>
      </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search...'
          className={styles.input}
        />
        <button type='submit' className={styles.button}>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
