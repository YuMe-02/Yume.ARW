// dynamic_base_loader.js

// Function to load HTML content from a file
function loadHTML(url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            if (callback) callback();
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Function to load CSS file dynamically
function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}
