// src/components/VideoBackground.js
import React from 'react';
import './VideoBackground.css'; // Import the CSS file for styling

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video">
        <source src="path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* You can include other content here */}
    </div>
  );
};

export default VideoBackground;
