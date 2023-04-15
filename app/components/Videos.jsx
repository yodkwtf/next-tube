import Link from 'next/link';

const fetchVideos = async () => {
  const res = await fetch('http://localhost:3000/api/videos');
  const videos = await res.json();
  return videos;
};

const Videos = async () => {
  const videos = await fetchVideos();

  return (
    <div className="courses">
      {videos.map((video) => (
        <div key={video.id} className="card">
          <h2>{video.title}</h2>
          <small>Category: {video.category}</small>
          <p>{video.description}</p>
          <Link href={video.link} target="_blank" className="btn">
            Watch Video
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Videos;
