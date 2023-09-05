const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input").value;
///// api.example has to be replaced with rapid api
    fetch(`https://api.example.com/listings?search=${searchInput}`)
        .then(response => response.json())
        .then(data => {
            // Your code to display the listings goes here
        })
        .catch(error => console.error('Error:', error));
});
