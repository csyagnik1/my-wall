// src/App.js
import React from 'react';
import AddBoard from './components/AddBoard';
import AddPost from './components/AddPost';
import LikeButton from './components/LikeButton';
import ImageUpload from './components/ImageUpload';
import { useSelector } from 'react-redux';

const App = () => {
  
  const userId = 1;

  const boards = useSelector((state) => state.myWall.boards);
  const posts = useSelector((state) => state.myWall.posts);

  return (
    <div>
      <h2>myWall</h2>
      <AddBoard />
      <hr />
      {boards.map((board) => (
        <div key={board.id}>
          <h3>{board.name}</h3>
          <AddPost boardId={board.id} userId={userId} />
          <hr />
          {/* Display posts for the current board */}
         {posts.map((post) => (
            <div key={post.id}>
              <p>{post.content}</p>
              <LikeButton postId={post.id} userId={userId} />
              <ImageUpload postId={post.id} />
              {/* Display the uploaded image if available */}
              {post.imagePath && <img src={post.imagePath} alt="Uploaded" />}
              <hr />
            </div>
          ))}
          
        </div>
      ))}
    </div>
  );
};

export default App;
