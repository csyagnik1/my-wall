// src/components/LikeButton.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLike } from '../redux/myWallSlice';

const LikeButton = ({ postId, userId }) => {
  const dispatch = useDispatch();
  const likedBy = useSelector((state) => state.myWall.likes[postId] || []);

  const handleLike = () => {
    dispatch(addLike({ postId, userId }));
  };

  const isLiked = likedBy.includes(userId);

  return (
    <button onClick={handleLike}>
      {isLiked ? 'Unlike' : 'Like'}
      {likedBy.length > 0 && ` (${likedBy.length})`}
    </button>
  );
};

export default LikeButton;