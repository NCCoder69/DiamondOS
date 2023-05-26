var fakeWindows = document.querySelectorAll(".fakeWindow");

// Function to toggle a specific fake window visibility
function toggleFakeWindow(windowId) {
  var fakeWindow = document.getElementById(windowId);
  if (fakeWindow.style.display === "none") {
    fakeWindow.style.display = "block";
  } else {
    fakeWindow.style.display = "none";
  }
}

// Function to toggle fullscreen mode for a specific window
function toggleFullScreen(windowId) {
  var fakeWindow = document.getElementById(windowId);
  if (!fakeWindow.classList.contains('fullscreen')) {
    fakeWindow.classList.add('fullscreen');
    document.body.style.overflow = "hidden";
  } else {
    fakeWindow.classList.remove('fullscreen');
    document.body.style.overflow = "auto";
  }
}



// Function to close a specific fake window
function closeFakeWindow(windowId) {
  var fakeWindow = document.getElementById(windowId);
  fakeWindow.style.display = "none";
  // Add any additional cleanup code here
}


function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function setTime() {
  var today = new Date();
  var hour = today.getHours() % 12  || 12;
  var minute = today.getMinutes();
  var period = today.toLocaleString([], { hour12: true});
  period = period.split(" ")[2];
  if (hour < 10) {hour = "0" + hour}
  if (minute < 10) {minute = "0" + minute}
  document.getElementById("navtime").innerText = hour + ":" + minute + " " + period
  setTimeout(setTime, 1000);
}

window.onload = function() {
setTime()
}

function updateTime() {
  var now = new Date();
  var time = now.toLocaleTimeString();
  var date = now.toLocaleDateString();
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
}

setInterval(updateTime, 1000);

var volumeIcon = document.getElementById('volume-icon');

function updateVolumeIcon(volumeLevel) {
  if (volumeLevel == 0) {
    volumeIcon.style.backgroundImage = "url('volume-mute.png')";
  } else if (volumeLevel < 50) {
    volumeIcon.style.backgroundImage = "url('volume-low.png')";
  } else {
    volumeIcon.style.backgroundImage = "url('volume-high.png')";
  }
}

