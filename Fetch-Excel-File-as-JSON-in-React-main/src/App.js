import React, { useState } from 'react';
import { Data } from './Components/Data';
import * as XLSX from 'xlsx';

function App() {
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  const [excelData, setExcelData] = useState(null);

  const fileType = ['application/vnd.ms-excel'];

  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    } else {
      console.log('Please select your file');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const formData = new FormData();
      formData.append('file', excelFile);

      try {
        const response = await fetch('http://127.0.0.1:5000/upload', {
          method: 'POST',
          body: formData,
        });
        const responseData = await response.json();
        setExcelData(responseData.data);
      } catch (error) {
        console.error('Error uploading and processing file:', error);
      }
    } else {
      setExcelData(null);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <form
          className="form-group"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>
            <h5>Upload Excel file</h5>
          </label>
          <br />
          <input
            type="file"
            className="form-control"
            onChange={handleFile}
            required
          ></input>
          {excelFileError && (
            <div
              className="text-danger"
              style={{ marginTop: '5px' }}
            >
              {excelFileError}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: '5px' }}
          >
            Submit
          </button>
        </form>
      </div>

      <br />
      <hr />

      <h5>View Details</h5>
      <div className="viewer">
        {excelData === null && <>No file selected</>}
        {excelData !== null && (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Package</th>
                  <th scope="col">TagNo</th>
                  <th scope="col">EquipmentNo</th>
                  <th scope="col">Model</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <Data excelData={excelData} />
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
