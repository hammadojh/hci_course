import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/chapters.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <h1>SWE 503: HCI Course Plan</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Topic</th>
            <th>Book Chapters</th>
            <th>Research Papers</th>
            <th>In-Class Activity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.topic}</td>
              <td>
                <ul>
                  {item.chapters.map((chapter, idx) => (
                    <li key={idx}>{chapter.title} <a href={chapter.slides} target="_blank" rel="noopener noreferrer">
                      (ppt)
                    </a>
                    </li>
                  ))}
                </ul>
              </td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;