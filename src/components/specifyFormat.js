// import React, { useState } from 'react';

// const SpecifyFormat = () => {

//   return (
//     <div className="row">
//         <div className="col-2">Step 2 :</div>
//         <div className='col-8'>
        
//       {/* <h2>File Upload</h2> */}
//       <form>
//         <div>
//           <label htmlFor="file">Specify Format:</label>
//           <div className="row">
//             <div className="col-8">File Type</div>
//             <div className="col-3">
//             <div class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     csv
//   </button>
//   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//     <a class="dropdown-item" href="#">svg</a>
//     <a class="dropdown-item" href="#">json</a>
//     <a class="dropdown-item" href="#">pdf</a>
//   </div>
// </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-8">Character encoding</div>
//             <div className="col-3">
//             <div class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//   UTF-8
//   </button>
//   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//     <a class="dropdown-item" href="#">UTF-16BE</a>
//     <a class="dropdown-item" href="#">UTF-16</a>
//     <a class="dropdown-item" href="#">UTF-32</a>
//   </div>
// </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-8">Delimiter</div>
//             <div className="col-3">
//             <div class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Comma
//   </button>
//   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//     <a class="dropdown-item" href="#">Colon</a>
//     <a class="dropdown-item" href="#">Semi-colon</a>
//     <a class="dropdown-item" href="#">Blank</a>
//   </div>
// </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-8">Has header</div>
//             <div className="col-4">
//             <div className="form-check">
//   <input
//     className="form-check-input"
//     type="checkbox"
//     defaultValue=""
//     id="flexCheckChecked"
//     defaultChecked=""
//   />
//   <label className="form-check-label" htmlFor="flexCheckChecked">
//     Checked checkbox
//   </label>
// </div>

//             </div>
//           </div>
//         </div>
        
//       </form>
//     </div>
//     </div>
//   );
// };

// export default SpecifyFormat;
import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const SpecifyFormat = () => {
  const [fileType, setFileType] = useState('csv');
  const [encoding, setEncoding] = useState('UTF-8');
  const [delimiter, setDelimiter] = useState('Comma');
  const [hasHeader, setHasHeader] = useState(true);

  const handleFileTypeChange = (selectedFileType) => {
    setFileType(selectedFileType);
  };

  const handleEncodingChange = (selectedEncoding) => {
    setEncoding(selectedEncoding);
  };

  const handleDelimiterChange = (selectedDelimiter) => {
    setDelimiter(selectedDelimiter);
  };

  const handleHasHeaderChange = (event) => {
    setHasHeader(event.target.checked);
  };

  return (
    <div className="row">
      <div className="col-2">Step 2 :</div>
      <div className="col-8">
        <Form>
          <Form.Group>
            <Form.Label htmlFor="file">Specify Format:</Form.Label>
            <div className="row">
              <div className="col-8">File Type</div>
              <div className="col-3">
                <DropdownButton
                  id="fileTypeDropdown"
                  title={fileType}
                  onSelect={handleFileTypeChange}
                  className="non-hoverable-dropdown"
                >
                  <Dropdown.Item eventKey="csv">csv</Dropdown.Item>
                  <Dropdown.Item eventKey="svg">svg</Dropdown.Item>
                  <Dropdown.Item eventKey="json">json</Dropdown.Item>
                  <Dropdown.Item eventKey="pdf">pdf</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>

            <div className="row">
              <div className="col-8">Character encoding</div>
              <div className="col-3">
                <DropdownButton
                  id="encodingDropdown"
                  title={encoding}
                  onSelect={handleEncodingChange}
                  className="non-hoverable-dropdown"
                >
                  <Dropdown.Item eventKey="UTF-8">UTF-8</Dropdown.Item>
                  <Dropdown.Item eventKey="UTF-16BE">UTF-16BE</Dropdown.Item>
                  <Dropdown.Item eventKey="UTF-16">UTF-16</Dropdown.Item>
                  <Dropdown.Item eventKey="UTF-32">UTF-32</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>

            <div className="row">
              <div className="col-8">Delimiter</div>
              <div className="col-3">
                <DropdownButton
                  id="delimiterDropdown"
                  title={delimiter}
                  onSelect={handleDelimiterChange}
                  className="non-hoverable-dropdown"
                >
                  <Dropdown.Item eventKey="Comma">Comma</Dropdown.Item>
                  <Dropdown.Item eventKey="Colon">Colon</Dropdown.Item>
                  <Dropdown.Item eventKey="Semi-colon">Semi-colon</Dropdown.Item>
                  <Dropdown.Item eventKey="Blank">Blank</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>

            <div className="row">
              <div className="col-8">Has header</div>
              <div className="col-4">
                <Form.Check
                  type="checkbox"
                  label="Checked checkbox"
                  id="flexCheckChecked"
                  checked={hasHeader}
                  onChange={handleHasHeaderChange}
                />
              </div>
            </div>

          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default SpecifyFormat;




