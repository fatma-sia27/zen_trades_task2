import logo from './logo.svg';
import './App.css';
import Step from './components/step1'
import Table from './components/table'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Step />} />
          <Route path="/table" element={<Table />} />
         
        </Routes>
      </BrowserRouter>   
    </>
  );
}

export default App;
