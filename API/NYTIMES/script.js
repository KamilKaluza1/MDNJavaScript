// Defining a baseURL and key to as part of the request URL

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'DHSAeLVAoyGY5rJNMjgb7ENJP2M3npd5';

// Grab references to all the DOM elements you'll need to manipulate
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const section = document.querySelector('section');
const nav = document.querySelector('nav');

// Hide the "Previous"/"Next" navigation to begin with, as we don't need it immediately
nav.style.display = 'none';

// define the initial page number and status of the navigation being displayed
let pageNumber = 0;

// Event listeners to control the functionality
searchForm.addEventListener('submit', submitSearch);
function submitSearch(e) {
    pageNumber = 0;
    fetchResults(e);
  }
  
  function fetchResults(e) {
    // Use preventDefault() to stop the form submitting
    e.preventDefault();
  
    // Assemble the full URL
    let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;
  
    if (startDate.value !== '') {
      url = `${url}&begin_date=${startDate.value}`;
    };
  
    if (endDate.value !== '') {
      url = `${url}&end_date=${endDate.value}`;
    };
  }
  
