import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateBook = () => {
  //declare data for new CustomerAcc

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);



  //runs when save button is clicked
  //posts new phone to database
  const handleSaveBook = () => {
    console.log("button clicked 1");
    const data = {
        title,
        author,
        summary,
        year
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('Sadly an error has occurred :(');
        console.log(error);
      });
      console.log("button clicked 2");
  };

  return (
    <div>
      <h1 class="container-fluid p-5 bg-primary text-white text-center">Create New Book</h1>
      <div style={{ padding: '10px' }}>
        <div>
          <label>Title: </label>
          <input
            id="title_box"
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author: </label>
          <input
            id="author_box"
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
        <label>Summary: </label>
          <textarea
            id="summary_box"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={5}
            style={{
              width: '100%',
              resize: 'both',
              minHeight: '100px'
            }}
          />
          </div>
        <div>
          <label>Year: </label>
          <input
            id="year_box"
            type='number'
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        {/* Conditional Rendering to ensure that book cannot sumbit a book unless all mandatory fields are filled */}
        {/* Note: routes in backend also ensure you are sending the required fields */}
        {
        title !="" &&
        author !="" &&
        summary !="" &&
        year != ""
        ? (
        <div>
        <button id="save_button" onClick={handleSaveBook}>
          Save
        </button>
        </div>
        ) : (
          <p>Please fill all mandatory fields before sumbiting</p>
        )
        }
      </div>
    </div>
  )
}

export default CreateBook