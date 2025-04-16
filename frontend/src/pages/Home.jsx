import React, {useEffect, useState} from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (

    <div class="homePage">
      <div className="container-fluid p-5 bg-primary text-white text-center">
      <h1>Library</h1>
      </div>
      <br></br>
      
      <div style={{ padding: '10px' }}>

        <Link type="button" className="btn btn-primary" to='/books/show' style={{ width: '100%' }}>
          View Books
        </Link>

        <br></br>
        <br></br>

        <Link type="button" className="btn btn-primary" to='/books/create' style={{ width: '100%' }}>
          Create New Book
        </Link>
      
      </div>
      <br></br>
    </div>
  )
}

export default Home