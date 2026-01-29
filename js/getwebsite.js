function getWebsiteDetails() {
  fetch('websiteconfig.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('websiteData').innerHTML = `
        <a href="${data.linkedin}" target="_blank" style="margin-right: 2rem;">
          <img src="images/linkedinicon.jpg" alt="LinkedIn">
        </a>
        <a href="${data.github}" target="_blank" style="margin-right: 2rem;">
          <img src="images/githubiconv2.png" alt="GitHub">
        </a>
        <a href="${data.resume}" target="_blank">
          <img src="images/cvicon.png" alt="Resume">
        </a>
      `;
    });
}

getWebsiteDetails().catch(error => console.log('Error loading JSON:', error));
