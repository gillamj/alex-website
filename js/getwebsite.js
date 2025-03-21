fetch('websiteconfig.json')
  .then(response => response.json()) // Convert the response to JSON
  .then(data => {
    // Access values from the JSON
    document.getElementById('websiteData').innerHTML = `
      <p><a href="${data.linkedin}">
      <img src="images/linkedinicon.jpg" alt="LinkedIn Page" width="50" height="50" align="left"
      style="margin-left: 600px;">
      </a></p>
      <p><a href="${data.github}">
      <img src="images/githubicon.png" alt="GitHub Page" width="50" height="50" align="right"
      style="margin-right: 600px;">
      </a></p>
      <p><a href="${data.resume}">
      <img src="images/cvicon.png" alt="Resume Page" width="40" height="50" align="center">
      </a></p>
    `;
  })
  .catch(error => console.log('Error loading JSON:', error));