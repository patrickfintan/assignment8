import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//8.1) import BrowserRouter
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  //change from "<React.StrictMode>" to "<BrowserRouter>" below
  //this gives us access to browerRouter throughout our project, as app is a child of browerRouter
  //now go to app.jsx for 8.2
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
