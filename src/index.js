import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Apk from './component/Sidebar/Apk';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  
  <React.StrictMode>

  {/* <BrowserRouter> */}


   
    {/* <App/> */}
    <Apk/>
  {/* </BrowserRouter> */}
  </React.StrictMode>
  
);

 
reportWebVitals();
