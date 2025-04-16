import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//8.2) import routes
import {Routes, Route} from 'react-router-dom'
//8.4) import pages
import Home from './pages/Home';

import CreateBook from './pages/CreateBook';
import ShowBooks from './pages/ShowBooks';
import UpdateBook from './pages/UpdateBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return(
    
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/books/create' element={<CreateBook/>} />
      <Route path='/books/show' element={<ShowBooks/>} />
      <Route path='/books/update/:id' element={<UpdateBook/>} />
      <Route path='/books/delete/:id' element={<DeleteBook/>} />
      
      
    </Routes>
  )
}

export default App;