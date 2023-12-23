
import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Table = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://s3.amazonaws.com/open-to-cors/assignment.json'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        console.log('Fetched data:', data);

        const productsArray = Object.values(data.products);

        if (Array.isArray(productsArray)) {
          // Sort the productsArray based on popularity in descending order
          const sortedData = productsArray.sort((a, b) => b.popularity - a.popularity);
          setRowData(sortedData);
        } else {
          console.error('Products array is not valid:', productsArray);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const columnDefs = [
    { headerName: 'Subcategory', field: 'subcategory', filter: true, floatingFilter: true },
    { headerName: 'Title', field: 'title', filter: true, floatingFilter: true },
    { headerName: 'Price', field: 'price', filter: true, floatingFilter: true },
    { headerName: 'Popularity', field: 'popularity', filter: true, floatingFilter: true },
  ];

  return (
    <div className="yes">
      <div className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
        <AgGridReact columnDefs={columnDefs} rowData={rowData} domLayout='autoHeight' />
      </div>
    </div>
  );
};

export default Table;
