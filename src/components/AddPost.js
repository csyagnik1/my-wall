// src/components/AddPost.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/myWallSlice';

const AddPost = ({ boardId, userId }) => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ boardId, userId, content }));
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post here"
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
