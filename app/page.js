'use client';
import { useState, useEffect } from 'react';
import Videos from './components/Videos';
import LoadingPage from './loading';
import Search from './components/Search';

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = async () => {
    const response = await fetch('/api/videos');
    const data = await response.json();
    setVideos(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome to Yodkwtf Academy</h1>
      <Search getSearchResults={(results) => setVideos(results)} />
      <Videos videos={videos} />
    </>
  );
};

export default HomePage;
