// src/components/AddBoard.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from '../redux/myWallSlice';

const AddBoard = () => {
  const [boardName, setBoardName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoard({ name: boardName }));
    setBoardName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
        placeholder="Enter board name"
      />
      <button type="submit">Add Board</button>
    </form>
  );
};

export default AddBoard;
