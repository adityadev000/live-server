console.log('hello jee');

const API_KEY = "168771779c71f3d64106d8a88376808a";



function renderDataInfo(data){

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)}  °C`;
    document.body.appendChild(newPara);
}

async function fetchWeatherDetail() {
    
    try{

        let city = "goa" ; 
    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`) ; 
    
        const data  = await response.json() ; 
    
        console.log("weather data: -> " , data ); 

        renderDataInfo() ; 
    
    }
    catch(err){
        console.log('city to shi se daalo');
        console.warn(err);
    }
}

async function getCustomWeatherDetail( ) {
    
    try{
        
        let latitude = 15.6333;
        let longitude = 18.3333 ;
        
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`) ;
            
        let data = await result.json() ; 

        console.log(data);

        renderDataInfo(data)  ;
        
        }
    catch(err){
        console.log("lon,lat to dhang se daalo" , err);
    }
}