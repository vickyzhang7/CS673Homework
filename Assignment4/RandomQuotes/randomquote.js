// Define constant PROXY_URL for cross-origin request proxy.
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
// Define constant API_URL to store the endpoint URL of the API being used.
const API_URL = 'http://api.forismatic.com/api/1.0/';

function getRandomQuote() {
  const url = `${PROXY_URL}${API_URL}?method=getQuote&format=json&lang=en`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayQuote(data);
    })
    .catch(error => {
      console.error('Error fetching random quote:', error);
    });
}

function displayQuote(quoteData) {
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  
  quoteElement.textContent = quoteData.quoteText;
  authorElement.textContent = quoteData.quoteAuthor !== '' ? `- ${quoteData.quoteAuthor}` : '';
}

document.getElementById('searchButton').addEventListener('click', function() {
  searchQuote();
});

function searchQuote() {
  const searchInput = document.getElementById('searchInput').value.trim();
  if (searchInput === '') {
    alert('Please enter a search query.');
    return;
  }
  
  const url = `${PROXY_URL}${API_URL}?method=getQuote&format=json&lang=en&key=${searchInput}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      displaySearchResults(data);
    })
    .catch(error => {
      console.error('Error fetching search results:', error);
    });
}
//but this API can't search by keyword and author
function displaySearchResults(quoteData) {
  const searchResultsContainer = document.getElementById('searchResults');
  if (quoteData.quoteText) {
    const result = `<p>${quoteData.quoteText} - ${quoteData.quoteAuthor}</p>`;
    searchResultsContainer.innerHTML = result;
  } else {
    searchResultsContainer.innerHTML = '<p>No results found.</p>';
  }
}
