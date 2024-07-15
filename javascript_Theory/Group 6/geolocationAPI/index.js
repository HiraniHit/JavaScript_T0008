

//i want to add user input a city and get IP address and all information


//https://ipgeolocation.abstractapi.com/v1/?api_key=f793810cfaab4f0389dbdcfaee1cefdb&ip_address=110.224.141.113
// console.log('https://ipgeolocation.abstractapi.com/v1/?api_key=f793810cfaab4f0389dbdcfaee1cefdb&ip_address=123.201.3.127');
// http://ip-api.com/json/{query}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query
// http://api.weatherapi.com/v1/ip.json
// let input = document.getElementById("location").value
// console.log("http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=yes");


//google api key :AIzaSyBbMlx52J0pGuOKpGiL7oNNGDu9cDEw8YA
//api : https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY


// console.log(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBbMlx52J0pGuOKpGiL7oNNGDu9cDEw8YA`);
// console.log(`https://www.google.com/maps/@21.281959,72.8169321,17z?entry=ttu`);


let div = document.querySelector(".map")
let ifreme = document.createElement("iframe")
ifreme.setAttribute("src",`https://www.google.com/maps/@20.948117,73.471545,12.08z?entry=ttu`)
div.appendChild(ifreme)


function getLocation() {
  try {
    const success = (position) => {
      const { latitude, longitude } = position.coords;
      let p = document.querySelector(".loc-info");
      p.textContent = `Your latitude is ${latitude} & longitude is ${longitude}`;

    };
    const error = (error) => {
      console.log(error.message);
      let p = document.querySelector(".loc-info");
      p.textContent = `${error.message}`;
    };
    navigator.geolocation.getCurrentPosition(success, error);

    let input = document.getElementById("location").value
    console.log(input);
    document.getElementById("location").value = ""

  } catch (error) {
    console.log(error);
  }
}
