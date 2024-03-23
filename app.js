// Require the 'dotenv' module to load environment variables from a .env file
require('dotenv').config();

// Load the API key from environment variables
const apiKey = process.env.API_KEY;
console.log("Environment variables:", process.env);

// Check if the API key is defined
if (!apiKey) {
    console.error("API key is not defined. Make sure to set the API_KEY environment variable.");
    process.exit(1); // Exit the process with an error code
}

// Function to fetch data using the API key
function fetchData() {
    // Your code to fetch data using the API key goes here...
    console.log("Fetching data using API key:", apiKey);
}

// Call the fetchData function
fetchData();

// Function to load related videos from the same channel
function loadRelatedVideos(videoId) {
    // Fetch the API key from environment variables
    var apiKey = process.env.API_KEY;

    // Ensure API key is available
    if (!apiKey) {
        console.error("API key is not defined. Make sure to set the API_KEY environment variable.");
        return; // Exit function if API key is not defined
    }

    // Make a request to YouTube Data API
    var apiUrl = 'https://www.googleapis.com/youtube/v3/search';
    var channelId = 'UCmN5wkDXdYOxqYNY2FqluXQ'; // Specify the channel ID
    var maxResults = 5; // Number of related videos to display

    var url = `${apiUrl}?part=snippet&relatedToVideoId=${videoId}&type=video&channelId=${channelId}&maxResults=${maxResults}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Parse the response and generate HTML to display related videos
            var relatedVideosContainer = document.getElementById('relatedVideos');
            relatedVideosContainer.innerHTML = ''; // Clear previous related videos
            data.items.forEach(item => {
                var videoTitle = item.snippet.title;
                var videoId = item.id.videoId;
                var thumbnailUrl = item.snippet.thumbnails.default.url;

                var videoItem = document.createElement('div');
                videoItem.innerHTML = `
                    <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                        <img src="${thumbnailUrl}" alt="${videoTitle}">
                        <p>${videoTitle}</p>
                    </a>
                `;
                relatedVideosContainer.appendChild(videoItem);
            });
        })
        .catch(error => {
            console.error('Error fetching related videos:', error);
        });
}
