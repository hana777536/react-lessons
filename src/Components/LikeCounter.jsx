import React, { useState } from 'react';

function LikeCounter() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      style={{
        width: '50px',
        height: '30px',
        backgroundColor: isLiked ? 'red' : 'white',
        border: '1px solid black',
        marginBottom: '10px',
      }}
      onClick={() => setIsLiked((prev) => !prev)}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
}

export default LikeCounter;