$(document).ready(function(){
    // Defining variables
    let inp = $('#inp');
    let btn = $('#btn');
    let descp = $('#description');
    let humidity = $('#humidity');
    let minTemp = $('#minTemp');
    let maxTemp = $('#maxTemp');
    let weatherImg = $('#weatherImg');
    let icon = $('#icon');
    var logo = null;
    M.AutoInit();
    $('.collapsible').collapsible();
            
    //API KEYS
    let appid = "appid=2a1007800ab5221073db5ac5f77904fb";
    // result.style.display = none;
    $('#result').css('display','none');
    btn.click(function(){
        let city = inp.val();
        //result.style.display = block;
        $('#result').css('display','block');
        
        
        $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&${appid}&units=metric`,
        method: 'GET',
        success: (data) =>{
            let weatherdata = JSON.parse(JSON.stringify(data));
            // weather.text(`weather:
            // main: ${weatherdata.weather.main}`);
            
            let resultdescription = weatherdata.weather[0].description;
            // descp.text(resultdescription.charAt(0).toUppercase() + resultdescription.slice(1));

            descp.text(weatherdata.weather[0].description);
            // console.log(weatherdata.weather.description);
            icon.attr('src', "http://openweathermap.org/img/w/" + weatherdata.weather[0].icon + ".png");
            // icon.src = "http://openweathermap.org/img/w/" + weatherdata.weather[0].icon + ".png";
            minTemp.text(`Minimum Today will be ${weatherdata.main.temp_min} Degree Celsius`);
            maxTemp.text(`Maximum Today Will be ${weatherdata.main.temp_max} Degree Celsius`);
            humidity.text(`Humidity is ${weatherdata.main.humidity}`);
            logo = weatherdata.weather[0].main;
            // console.log(logo);
            let a = function(){
                // console.log(logo);
                switch (logo){
                
                    case 'Clear':
                    case 'Clear sky':
                    weatherImg.attr('src', "http://gdurl.com/XcJs");
                    break;
                    
                    case 'Clouds':
                    case 'Few clouds':
                    case 'Broken clouds':
                    case 'Scattered clouds':
                    weatherImg.attr('src', "http://gdurl.com/R2WH");
                    break;
                    
                    case 'Rain':
                    case 'Shower rain':
                    weatherImg.attr('src', "http://gdurl.com/yMvx");
                    break;
                    
                    case 'Snow':
                    weatherImg.attr('src',"http://gdurl.com/xImC");
                    break;

                    case 'Storm':
                    case 'Thunderstorm':
                    weatherImg.attr('src',"http://gdurl.com/3X2i");
                    break;
                    
                    case 'Mist':
                    weatherImg.attr('src',"http://gdurl.com/IG-L");
                    break;
                    
                    case 'Smoke':
                    weatherImg.attr('src', "http://gdurl.com/qZYF");
                    break;

                    case 'Haze':
                    weatherImg.attr('src', "http://gdurl.com/BMrN");
                    break;
                    case 'Fog':
                    weatherImg.attr('src', "http://gdurl.com/aYVT");
                    break;
                    default:
                    weatherImg.attr('src', "http://gdurl.com/ClyA");
                    // console.log(weatherdata.weather[0].main);
                    // console.log(logo);
                    break;

                }
            }
            a();
        }
        }) 
    })
})


// Attributes and Properties 
/*
{"coord":{"lon":-0.13,"lat":51.51},
"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],
"base":"stations",
"main":{"temp":280.32,
"pressure":1012,
"humidity":81,
"temp_min":279.15,
"temp_max":281.15},
"visibility":10000,
"wind":{"speed":4.1,"deg":80},
"clouds":{"all":90},"dt":1485789600,
"sys":{"type":1,"id":5091,
"message":0.0103,
"country":"GB","sunrise":1485762037,
"sunset":1485794875},
"id":2643743,
"name":"London","cod":200}
*/