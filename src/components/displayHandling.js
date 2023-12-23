import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
const DisplayTable = ({ data }) => {
  const [selectedFields, setSelectedFields] = useState(['Title', 'Price', 'Popularity']);
  const [availableFields, setAvailableFields] = useState([
    'Product ID',
    'Subcategory',
    'Title',
    'Price',
    'Popularity',
    'Description',
    'Rating',
    'UTM Source',
  ]);

  // Check if data is available before sorting
  const sortedData = data ? data.sort((a, b) => b.Popularity - a.Popularity) : [];

  // Function to handle field selection
  const handleFieldSelection = (field, direction) => {
    if (direction === 'add') {
      setSelectedFields([...selectedFields, field]);
      setAvailableFields(availableFields.filter((item) => item !== field));
    } else if (direction === 'remove') {
      setSelectedFields(selectedFields.filter((item) => item !== field));
      setAvailableFields([...availableFields, field]);
    }
  };

  return (
    <>
    <div className="row">
        <div className="col-1 pt-3">Step 3:</div>
        <div className="col-8">
        <div className='yes'>

<div>
  <label>Available Fields:</label>
  <hr></hr>
  <select
    multiple
    value={selectedFields}
    onChange={(e) => {
      const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
      setSelectedFields(selectedOptions);
    }}
  >
    {availableFields.map((field) => (
      <option key={field} value={field}>
        {field}
      </option>
    ))}
  </select>
  <div>
    <button
      type="button"
    
      onClick={() => selectedFields.forEach((field) => handleFieldSelection(field, 'remove'))}
    >
      &lt;&lt; Remove
    </button>
    
    <button
      type="button"
      onClick={() => availableFields.forEach((field) => handleFieldSelection(field, 'add'))}
    >
      Add &gt;&gt;
    </button>
  </div>
</div>

<table>
  <thead>
    <tr>
      {selectedFields.map((field) => (
        <th key={field}>{field}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {sortedData.map((item, index) => (
      <tr key={index}>
        {selectedFields.map((field) => (
          <td key={field}>{item[field]}</td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
</div>
        </div>
    </div>
    </>
  );
};

export default DisplayTable;
