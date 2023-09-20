document.addEventListener("DOMContentLoaded", () => {
const apiKey = 'ec506e1477e589f7e605bdb66bbda0b3';
const weatherInformation = document.getElementById('weather-information');
const searchButton = document.getElementById('search-button');
const search =document.getElementById('search');
const locationName=document.getElementById('locationName');
let locations ;



searchButton.addEventListener("click", () => {
  locations=search.value.trim();
  console.log(locations)
  locationName.textContent =`Location:${locations}` ;

});
});
  
  
  
  
      

