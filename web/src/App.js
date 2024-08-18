import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/hci_course/chapters.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json();
        } else {
          throw new Error("Received non-JSON response");
        }
      })
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <div className="App">
      <h1>SWE 595: Special Topics in Software Engineering - Human-Computer Interaction (HCI)</h1>
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
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.topic}</td>
                <td>
                  <ul>
                    {item.chapters && item.chapters.length > 0 ? (
                      item.chapters.map((chapter, idx) => (
                        <li key={idx}>
                          {chapter.title}
                          {chapter.slides && (
                            <a href={chapter.slides} target="_blank" rel="noopener noreferrer">
                              (ppt)
                            </a>
                          )}
                        </li>
                      ))
                    ) : (
                      <li>No chapters available</li>
                    )}
                  </ul>
                </td>
                <td></td>
                <td></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
