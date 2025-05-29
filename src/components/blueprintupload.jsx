import React, { useState } from 'react';

const BlueprintUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (file) {
      onUpload(file);
      setFile(null);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Upload Blueprint</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
        Upload
      </button>
    </div>
  );
};

export default BlueprintUpload;
