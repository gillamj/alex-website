let resizeTimeout;
window.addEventListener('resize', function (event) {
   clearTimeout(resizeTimeout);
   resizeTimeout = setTimeout(function () {
      window.location.reload();
   }, 500); // Delay the refresh by 500 milliseconds
});

function getWebsiteDetails(screenWidth) {
   fetch('websiteconfig.json')
      .then(response => response.json()) // Convert the response to JSON
      .then(data => {
         // Access values from the JSON
         if (screenWidth < 640) {
            document.getElementById('websiteData').innerHTML = `
                  <p><a href="${data.linkedin}">
                  <img src="images/linkedinicon.jpg" alt="LinkedIn Page" width="50" height="50" align="left">
                  </a></p>
                  <p><a href="${data.github}">
                  <img src="images/githubicon.png" alt="GitHub Page" width="50" height="50" align="right">
                  </a></p>
                  <p><a href="${data.resume}">
                  <img src="images/cvicon.png" alt="Resume Page" width="40" height="50" align="center">
                  </a></p>
                `;
         } else if (screenWidth > 639 && screenWidth < 801) {
            document.getElementById('websiteData').innerHTML = `
                  <p><a href="${data.linkedin}">
                  <img src="images/linkedinicon.jpg" alt="LinkedIn Page" width="50" height="50" align="left">
                  </a></p>
                  <p><a href="${data.github}">
                  <img src="images/githubiconv2.png" alt="GitHub Page" width="50" height="50" align="right"
                  style="margin-right: 120px;">
                  </a></p>
                  <p><a href="${data.resume}">
                  <img src="images/cvicon.png" alt="Resume Page" width="40" height="50" align="center"
                  style="margin-right: 60px;">
                  </a></p>
                `;
         } else if (screenWidth > 800 && screenWidth < 1025) {
            document.getElementById('websiteData').innerHTML = `
                  <p><a href="${data.linkedin}">
                  <img src="images/linkedinicon.jpg" alt="LinkedIn Page" width="50" height="50" align="left">
                  </a></p>
                  <p><a href="${data.github}">
                  <img src="images/githubiconv2.png" alt="GitHub Page" width="50" height="50" align="right"
                  style="margin-right: 160px;">
                  </a></p>
                  <p><a href="${data.resume}">
                  <img src="images/cvicon.png" alt="Resume Page" width="40" height="50" align="center"
                  style="margin-right: 80px;">
                  </a></p>
                `;
         } else if (screenWidth > 1024 && screenWidth < 1153) {
            document.getElementById('websiteData').innerHTML = `
                  <p><a href="${data.linkedin}">
                  <img src="images/linkedinicon.jpg" alt="LinkedIn Page" width="50" height="50" align="left">
                  </a></p>
                  <p><a href="${data.github}">
                  <img src="images/githubiconv2.png" alt="GitHub Page" width="50" height="50" align="right"
                  style="margin-right: 190px;">
                  </a></p>
                  <p><a href="${data.resume}">
                  <img src="images/cvicon.png" alt="Resume Page" width="40" height="50" align="center"
                  style="margin-right: 95px;">
                  </a></p>
                `;
         } else if (screenWidth > 1152 && screenWidth < 1177) {
            document.getElementById('websiteData').innerHTML = `
                  <p><a href="${data.linkedin}">
                  <img src="images/linkedinicon.jpg" alt="LinkedIn Page" width="50" height="50" align="left">
                  </a></p>
                  <p><a href="${data.github}">
                  <img src="images/githubiconv2.png" alt="GitHub Page" width="50" height="50" align="right"
                  style="margin-right: 160px;">
                  </a></p>
                  <p><a href="${data.resume}">
                  <img src="images/cvicon.png" alt="Resume Page" width="40" height="50" align="center"
                  style="margin-right: 80px;">
                  </a></p>
                `;
         } else if (screenWidth > 1176 && screenWidth < 1281) {
            document.getElementById('websiteData').innerHTML = `
                  <p><a href="${data.linkedin}">
                  <img src="images/linkedinicon.jpg" alt="LinkedIn Page" width="50" height="50" align="left">
                  </a></p>
                  <p><a href="${data.github}">
                  <img src="images/githubiconv2.png" alt="GitHub Page" width="50" height="50" align="right"
                  style="margin-right: 190px;">
                  </a></p>
                  <p><a href="${data.resume}">
                  <img src="images/cvicon.png" alt="Resume Page" width="40" height="50" align="center"
                  style="margin-right: 95px;">
                  </a></p>
                `;
         } else if (screenWidth > 1280 && screenWidth < 1440) {
            document.getElementById('websiteData').innerHTML = `
                  <p><a href="${data.linkedin}">
                  <img src="images/linkedinicon.jpg" alt="LinkedIn Page" width="50" height="50" align="left">
                  </a></p>
                  <p><a href="${data.github}">
                  <img src="images/githubiconv2.png" alt="GitHub Page" width="50" height="50" align="right"
                  style="margin-right: 210px;">
                  </a></p>
                  <p><a href="${data.resume}">
                  <img src="images/cvicon.png" alt="Resume Page" width="40" height="50" align="center"
                  style="margin-right: 105px;">
                  </a></p>
                `;
         } else if (screenWidth > 1439 && screenWidth < 1600) {
            document.getElementById('websiteData').innerHTML = `
                  <p><a href="${data.linkedin}">
                  <img src="images/linkedinicon.jpg" alt="LinkedIn Page" width="50" height="50" align="left">
                  </a></p>
                  <p><a href="${data.github}">
                  <img src="images/githubiconv2.png" alt="GitHub Page" width="50" height="50" align="right"
                  style="margin-right: 250px;">
                  </a></p>
                  <p><a href="${data.resume}">
                  <img src="images/cvicon.png" alt="Resume Page" width="40" height="50" align="center"
                  style="margin-right: 125px;">
                  </a></p>
                `;
         } else if (screenWidth > 1599 && screenWidth < 1680) {
            document.getElementById('websiteData').innerHTML = `
                  <p><a href="${data.linkedin}">
                  <img src="images/linkedinicon.jpg" alt="LinkedIn Page" width="50" height="50" align="left">
                  </a></p>
                  <p><a href="${data.github}">
                  <img src="images/githubiconv2.png" alt="GitHub Page" width="50" height="50" align="right"
                  style="margin-right: 250px;">
                  </a></p>
                  <p><a href="${data.resume}">
                  <img src="images/cvicon.png" alt="Resume Page" width="40" height="50" align="center"
                  style="margin-right: 125px;">
                  </a></p>
                `;
         } else if (screenWidth > 1679 && screenWidth < 1920) {
            document.getElementById('websiteData').innerHTML = `
                  <p><a href="${data.linkedin}">
                  <img src="images/linkedinicon.jpg" alt="LinkedIn Page" width="50" height="50" align="left">
                  </a></p>
                  <p><a href="${data.github}">
                  <img src="images/githubiconv2.png" alt="GitHub Page" width="50" height="50" align="right"
                  style="margin-right: 280px;">
                  </a></p>
                  <p><a href="${data.resume}">
                  <img src="images/cvicon.png" alt="Resume Page" width="40" height="50" align="center"
                  style="margin-right: 140px;">
                  </a></p>
                `;
         } else {
            document.getElementById('websiteData').innerHTML = `
                  <p><a href="${data.linkedin}">
                  <img src="images/linkedinicon.jpg" alt="LinkedIn Page" width="50" height="50" align="left"
                  </a></p>
                  <p><a href="${data.github}">
                  <img src="images/githubiconv2.png" alt="GitHub Page" width="50" height="50" align="right"
                  style="margin-right: 300px;">
                  </a></p>
                  <p><a href="${data.resume}">
                  <img src="images/cvicon.png" alt="Resume Page" width="50" height="50" align="center"
                  style="margin-right: 150px;">
                  </a></p>
                `;
         }
      })
}


const screenWidth = window.screen.width;
//var width = document.documentElement.clientWidth;
//var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//var screenRes = window.matchMedia("(max-width: 1768px)")

getWebsiteDetails(screenWidth)
   .catch(error => console.log('Error loading JSON:', error));