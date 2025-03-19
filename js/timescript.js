const monthname = ["January","February","March","April","May","June","July","August","September","October","November","December"];

//Time formatter
function formatTimeWithAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = String(date.getSeconds()).padStart(2, '0');
  let ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Add leading zero to minutes if needed
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Format time as "hh:mm AM/PM"
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

//Lookup day suffix
function getNumberSuffix(num) {
    // Handle numbers ending in 11, 12, or 13 (special case for "th")
    if (num > 10 && num < 14) {
        return num + "th";
    }

    // Otherwise, check the last digit of the number
    const lastDigit = num % 10;
    switch (lastDigit) {
        case 1:
            return num + "st";
        case 2:
            return num + "nd";
        case 3:
            return num + "rd";
        default:
            return num + "th";
    }
}

function updateTime() {
    const now = new Date();
    const day = getNumberSuffix(String(now.getDate()));
    let month = monthname[now.getMonth()];
    const timeString = formatTimeWithAMPM(now);
    const dateString = month + ' ' + day + ' ' + timeString;
    document.getElementById('clock').textContent = dateString;
}

// Call updateTime every second
setInterval(updateTime, 1000);

// Initialize time on load
updateTime();