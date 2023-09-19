const apiKey = 'ec506e1477e589f7e605bdb66bbda0b3';
const weatherInformation = document.getElementById('weather-information');
const searchButton = document.getElementById('search-button');
const search =document.getElementById('search');


function showLoader(){
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
  }
  
  function hideloader(){
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  }
  
  async function fetchMovieData(search){
          showLoader();
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`);
      const data = await response.json()
  
      weatherInformation.innerHTML = ''; //clear previous results
      console.log(data.results);

        if(data.results){

        }
      

    }

     catch{

     }
    }
  
  
  
  
      

