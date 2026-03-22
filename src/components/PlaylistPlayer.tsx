import { useState } from 'react';

interface Video {
  id: number;
  title: string;
  date: string;
  duration: string;
  description: string;
  url: string;
  tags: string[];
  available: boolean;
}

interface PlaylistProps {
  videos: Video[];
}

export function PlaylistPlayer({ videos }: PlaylistProps) {
  const [selectedVideo, setSelectedVideo] = useState<number>(0);
  const video = videos[selectedVideo];

  return (
    <div className="content-wrapper">
      {/* Video Player */}
      <section className="video-player-section">
        <div className="video-player-container" id="videoContainer">
          {video.available ? (
            <iframe src={video.url} allowFullScreen title={video.title}></iframe>
          ) : (
            <div className="coming-soon-container">
              <img
                src="/images/coffee-shop-barista.png"
                alt="Em Breve"
                className="coming-soon-image"
              />
              <div className="coming-soon-text">Em Breve</div>
              <div className="coming-soon-subtitle">Esta aula será disponibilizada em breve</div>
            </div>
          )}
        </div>
        <div className="video-info">
          <h2 className="video-title">{video.title}</h2>
          <div className="video-meta">
            <div className="meta-item">
              <span className="meta-icon">📅</span>
              <span>{video.date}</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">⏱️</span>
              <span>{video.duration}</span>
            </div>
          </div>
          <p className="video-description">{video.description}</p>
          <div className="video-tags">
            {video.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Playlist Sidebar */}
      <aside className="playlist-sidebar">
        <div className="playlist-header">
          Playlist
          <span className="playlist-count">{videos.length}</span>
        </div>
        <div className="playlist-items">
          {videos.map((v, index) => (
            <div
              key={v.id}
              className={`playlist-item ${selectedVideo === index ? 'active' : ''}`}
              onClick={() => setSelectedVideo(index)}
            >
              <div className="playlist-item-number">{v.id}</div>
              <div className="playlist-item-content">
                <div className="playlist-item-title">{v.title}</div>
                <div className="playlist-item-duration">{v.duration}</div>
              </div>
              {!v.available && <span className="coming-soon-badge">Em Breve</span>}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
