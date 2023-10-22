let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};
//Le dice al usuario que ponga una ciudad que va a agarrar la var introCity
let introCity = prompt("Enter a city").toLowerCase();

// Aqui la funcion de for..in busca similitudes de el input con lo que hay en el obj. o keys
//city es una var que le das a la busqueda y si el userInput es igual a algo dentro de weather
//por city se va a cambiar.
for (let city in weather) {
  if (introCity === city) {
    let roundedTemp = Math.round(weather[city].temp);
    let roundedHumidity = Math.round(weather[city].humidity);
    let faren = Math.round((roundedTemp * 9) / 5 + 32);
    let cityFound = false;

    //aqui en la alerta tenemos un string con nuestros keys adentro que se buscan con nuestro objeto:Weather
    // y con las llaves .temp y .humidity y city es el objeto dentro del objeto que tiene las keys dentro.
    alert(
      `It is currently ${roundedTemp}ºC (${faren}°F) in ${city} with a humidity of ${roundedHumidity}%`
    );
    cityFound = true;
  }
}

if (!cityFound) {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${introCity}`
  );
}
