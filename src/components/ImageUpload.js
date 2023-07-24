// src/components/ImageUpload.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addImage } from '../redux/myWallSlice';

const ImageUpload = ({ postId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Implement your file upload logic here and get the image path.
    // For simplicity, we will directly set the imagePath here.
    const imagePath = '/path/to/uploaded/image.png';
    dispatch(addImage({ postId, imagePath }));
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload Image
      </button>
    </div>
  );
};

export default ImageUpload ;