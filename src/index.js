 import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/reset.css'
 import './assets/fonts/fonts.css'
 import './assets/fonts/Gilroy/stylesheet.css'
 import './index.css'
 import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

       <BrowserRouter>
           <App />
       </BrowserRouter>

);

