import React, { useState } from 'react';
import axios from 'axios';

function GoogleSearch() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const apiKey = 'YOUR_GOOGLE_API_KEY';
    const cx = 'YOUR_CUSTOM_SEARCH_ENGINE_ID';
    const query = 'React'; // Change this to your desired search query

    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`
      );

      setSearchResults(response.data.items);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <h1>Google Search Component</h1>
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result) => (
          <li key={result.link}>
            <a href={result.link} target="_blank" rel="noopener noreferrer">
              {result.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoogleSearch;
