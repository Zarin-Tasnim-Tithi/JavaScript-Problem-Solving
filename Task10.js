//Asynchronous Fetch Timeout wrapper
function fetchWithTimeout(url, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Request Timed Out")), ms);
  });

  return Promise.race([fetch(url), timeout]);
}

// Example usage:
fetchWithTimeout("https://api.example.com", 200)
  .then(response => console.log("Success:", response))
  .catch(error => console.log("Failed:", error.message));