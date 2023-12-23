import React, { useState } from 'react';

const FileUploadForm = () => {
  const [selectedFileType, setSelectedFileType] = useState('pdf');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileTypeChange = (event) => {
    const fileType = event.target.value;
    setSelectedFileType(fileType);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      // Handle file upload logic here
      console.log(`Selected File: ${selectedFile.name}`);
      console.log(`Selected File Type: ${selectedFileType}`);
    } else {
      alert('Please select a file.');
    }
  };

  return (
    <div className="row">
        <div className="col-2">Step 1 :</div>
        <div className='col-8'>
        
      {/* <h2>File Upload</h2> */}
      <form>
        <div>
          <label htmlFor="file">Select File:</label>
          <input type="file" id="file" name="file" onChange={handleFileChange} />
        </div>
        <div>
          <label htmlFor="fileType">Supported File Type:</label>
          <select id="fileType" name="fileType" value={selectedFileType} onChange={handleFileTypeChange}>
            <option value="pdf">PDF</option>
            <option value="doc">DOC</option>
            <option value="txt">TXT</option>
            {/* Add more file types as needed */}
          </select>
        </div>
        {/* <button type="button" onClick={handleSubmit}>
          Upload
        </button> */}
      </form>
    </div>
    </div>
  );
};

export default FileUploadForm;