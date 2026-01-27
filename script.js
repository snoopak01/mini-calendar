function updateCalendar() {
  const now = new Date();
  const date = now.getDate();

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const month = monthNames[now.getMonth()];

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const dayName = dayNames[now.getDay()];
  
  document.getElementById('date').textContent= date;
  document.getElementById('month').textContent = month;
  document.getElementById('dayName').textContent = dayName;
}
updateCalendar();