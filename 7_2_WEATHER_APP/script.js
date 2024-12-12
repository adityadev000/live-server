const userTab = document.querySelector("[data-userWeather]") ; 
const searchTab = document.querySelector("[data-searchWeather]") ; 
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container") ; 
const searchForm = document.querySelector("[data-searchForm]") ; 
const userInfoContainer = document.querySelector(".user-info-container") ; 
const loadingScreen = document.querySelector(".loading-container") ; 
const errorMessage = document.querySelector(".error") ;



//initially variable needed
let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c" ; 

oldTab.classList.add("current-tab") ;
getFromSessionStorage() ; 
// ek kaam or pending h 

function switchTab(newTab){
    if(newTab != oldTab ){
        // background color hatao
        oldTab.classList.remove("current-tab") ;
        oldTab = newTab ;
        oldTab.classList.add("current-tab") ; 


        if(! searchForm.classList.contains("active")){
            // agar search form wala invisible h to visible kren
            userInfoContainer.classList.remove("active") ; 
            grantAccessContainer.classList.remove("active") ; 
            searchForm.classList.add("active") ; 
        }
        else{
            // phle searchform pe tha 
            searchForm.classList.remove("active") ; 
            userInfoContainer.classList.remove("active") ; 
            errorMessage.classList.remove("active") ;

            //main weather tab me aa gya hooon to weather display krni padegi
            getFromSessionStorage() ; 
        }

    }
}


// smj ni ayya ye function ki corrdinates kaise mile 
function getFromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates") ; 

    if(! localCoordinates ) {
        //agar local cordinated nhi mile h to grant location access wali window dikhani h.
        grantAccessContainer.classList.add("active") ; 
    }
    else{
        // The JSON.parse() method in JavaScript is used to convert a JSON-formatted string into a JavaScript object.
        const coordinates = JSON.parse(localCoordinates) ;
        fetchWeatherInfo(coordinates) ; 
    }
}

async function fetchWeatherInfo(coordinates){
    const {lat ,lon } = coordinates;


    grantAccessContainer.classList.remove("active") ; 

    // jb tk api call hui h tb tkk loding screen dikani padegi.
    loadingScreen.classList.add("active") ; 

    // api call
    try{

        // console.log(lat);
        // console.log(lon);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

        const data = await response.json() ; 
        
        //api call ho chuki loader hatana padega
        loadingScreen.classList.remove("active") ; 
        
        // weather info ko dikhana padega.
        userInfoContainer.classList.add("active") ; 
        
        renderWetherInfo(data) ; 
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        alert("something went wrong") ; 
        // something more
    }
}

function renderWetherInfo(weatherInfo){
    //we have to fetch elements
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText =  weatherInfo?.name;
    console.log(weatherInfo?.name);
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description ;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C` ;
    windspeed.innerText = `${weatherInfo?.wind?.speed }m/s`; 
    humidity.innerText = `${weatherInfo?.main?.humidity}%` ; 
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%` ; 

}

userTab.addEventListener("click" , () => {

    //pass clicked tab as an input
    switchTab(userTab) ; 
}) ;
searchTab.addEventListener("click" , () => {

    //pass clicked tab as an input
    switchTab(searchTab) ; 
}) ;


// yhi se ham current location ka pata lga pa rhe h 
function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert('alert') ;
        //HW - show an alert for no gelolocation support available
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);


// search form ka kaam
let searchInput = document.querySelector("[data-searchInput]") ; 
searchForm.addEventListener("submit", (e)=> {
    e.preventDefault() ; 

    if(searchInput.value === "" ) return ; 
// console.log(searchInput.value);
    fetchSearchWeatherInfo(searchInput.value) ; 
})

async function fetchSearchWeatherInfo(city){

    loadingScreen.classList.add("active") ;
    userInfoContainer.classList.remove("active") ;
    grantAccessContainer.classList.remove("active") ;

    try{
        errorMessage.classList.remove("active") ;

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`) ;

        const data = await response.json() ;


        if(response.status === 404){
            
            loadingScreen.classList.remove("active");
            userInfoContainer.classList.remove("active")  ;
            errorMessage.classList.add("active") ;
            
        }
        else{
            
            loadingScreen.classList.remove("active");
            userInfoContainer.classList.add("active")  ;
            errorMessage.classList.remove("active") ;
            renderWetherInfo(data) ; 
        }



    }
    catch{
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.remove("active")  ;
        alert("something went wrong") ; 
    }
}


