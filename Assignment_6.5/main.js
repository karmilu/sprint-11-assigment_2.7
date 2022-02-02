fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=CITY&units=metric&APPID=YOUR_KEY"
  )
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
