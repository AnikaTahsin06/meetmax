import React from 'react';
import './SeenBy.css'; // Import CSS file

function SeenBy({ count, images }) {
  return (
    <div className="seen-by">
      <span className="seen-text">{count} seen</span>
      <div className="avatars">
        {images.slice(0, 3).map((image, index) => (
          <img key={index} src={image} alt={`Avatar ${index + 1}`} className="avatar"/>
        ))}
        {images.length > 3 && (
          <div className="extra-avatar">+{images.length - 3}</div>
        )}
      </div>
    </div>
  );
}

export default SeenBy;
