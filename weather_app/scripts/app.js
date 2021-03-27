// do dom manipulation
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

  const { cityDets, weather } = data;

  //update  details

  details.innerHTML = `
  <h5 class="my-3">${cityDets.EnglishName}</h5>
   <div class="my 3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
     </div>      
  `
  //remove d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }

  //update night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);


  
  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'
  // if(weather.isDayTime) {
  //   timeSrc = 'img/day.svg'
  // } else{
  //   timeSrc = 'img/night.svg'
  // }

time.setAttribute('src', timeSrc);
}




const updateCity = async (city) => {

  //can call them here because of the order of them in the index.html, even though these are in seperate files
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  //return new object so the updateCity can see key-value pair we've concstructed ´
  return { cityDets, weather};
}

cityForm.addEventListener('submit', (e) => {
  //preveny defasult actin
  e.preventDefault();
  //city from city input form (the input field)
  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();
  //update ui with new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

  // set local storage
  // will alwaisy be the new one, becuassde it overwrites
  localStorage.setItem('city', city);

})

// see in the local storage in the root of the file, will run imidelty
// when user refresh

if(localStorage.getItem('city')){
  updateCity(localStorage.getItem('city'))
    .then(data => {
    updateUI(data)
  }).catch(err => console.log(err))
}