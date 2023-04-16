const createVenueHTML = (name, location, iconSource,index) => {
if(index==0){
		var originalHref = $("#click3").attr("href");
			$("#click3").click(function(){
				newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
				return $("#click3").attr("href", newHref);
			  });
	}else if(index==1){
			var originalHref = $("#click4").attr("href");
				$("#click4").click(function(){
					newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
					return $("#click4").attr("href", newHref);
				  });
		}else if(index==2){
				var originalHref = $("#click5").attr("href");
					$("#click5").click(function(){
						newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
						return $("#click5").attr("href", newHref);
					  });
			}else if(index==3){
					var originalHref = $("#click6").attr("href");
						$("#click6").click(function(){
							newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
							return $("#click6").attr("href", newHref);
						  });
			}else if(index==4){
					var originalHref = $("#click7").attr("href");
						$("#click7").click(function(){
							newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
							return $("#click7").attr("href", newHref);
						  });
		}else if(index==5){
				var originalHref = $("#click8").attr("href");
					$("#click8").click(function(){
						newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
						return $("#click8").attr("href", newHref);
					  });
			}else if(index==6){
					var originalHref = $("#click9").attr("href");
						$("#click9").click(function(){
							newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
							return $("#click9").attr("href", newHref);
						  });
	}else if(index==7){
			var originalHref = $("#click10").attr("href");
				$("#click10").click(function(){
					newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
					return $("#click10").attr("href", newHref);
				  });
	}
/*for (var i = 0; i < index; i++) {
	var originalHref = $("#click3").attr("href");
		$("#click3").click(function(){
			newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
			return $("#click3").attr("href", newHref);
		  });
	}*/
		// $(document).ready(function() {
			// Get the initial href value for all links
			/*var originalHrefs = $("#click3").map(function() {
			  return $(this).attr("href");
			}).get();
			
			// Set the href attribute to the new value when the input field chan
			  $("#click3").each(function(index) {
				var newHref = originalHrefs[index].replace("3/", "3/" + name+"+"+location.city);
				return $(this).attr("href", newHref);
			  });*/
			//});
	return `<h2>${name}</h2>
  <img class="venueimage" src="${iconSource}"/>
  <h3>Address:</h3> 
  <p>${location.address}</p>
  <p>${location.city}</p>	
  <p>${location.country}</p>`;
};

const createWeatherHTML = (currentDay) => {
	console.log(currentDay);
	return `<h2>day:${weekDays[new Date().getDay()]}</h2>
	        <h2>month:${monthNames[new Date().getMonth()]}</h2>
		<h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
		<h2>Condition: ${currentDay.weather[0].description}</h2>
  	<img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
};
const createWeatherHTML1 = (currentDay1) => {
	console.log(currentDay1);
	return ` <h2>Temperature: ${kelvinToFahrenheit(currentDay1.list[0].main.temp)}&deg;F</h2>
	<h2>temp_max: ${currentDay1.list[0].main.temp_max}</h2>
	<h2>temp_min: ${currentDay1.list[0].main.temp_min}</h2>
	<h2>Condition: ${currentDay1.list[0].weather[0].description}</h2>
	<h2>sea_level: ${currentDay1.list[0].main.sea_level}</h2>
    <h2>grnd_level: ${currentDay1.list[0].main.grnd_level}</h2>
	<h2>date: ${currentDay1.list[0].dt_txt}</h2>`;
};
const createWeatherHTML2= (currentDay2) => {
	console.log(currentDay2);
	return ` <h2>Temperature: ${kelvinToFahrenheit(currentDay2.list[0].main.temp)}&deg;F</h2>
	<h2>temp_max: ${currentDay2.list[7].main.temp_max}</h2>
	<h2>temp_min: ${currentDay2.list[7].main.temp_min}</h2>
	<h2>Condition: ${currentDay2.list[7].weather[0].description}</h2>
	<h2>sea_level: ${currentDay2.list[7].main.sea_level}</h2>
    <h2>grnd_level: ${currentDay2.list[7].main.grnd_level}</h2>
	<h2>date: ${currentDay2.list[7].dt_txt}</h2>`;
};
const createWeatherHTML3 = (currentDay3) => {
	console.log(currentDay3);
	return ` <h2>Temperature: ${kelvinToFahrenheit(currentDay3.list[0].main.temp)}&deg;F</h2>
	<h2>temp_max: ${currentDay3.list[17].main.temp_max}</h2>
	<h2>temp_min: ${currentDay3.list[17].main.temp_min}</h2>
	<h2>Condition: ${currentDay3.list[17].weather[0].description}</h2>
	<h2>sea_level: ${currentDay3.list[17].main.sea_level}</h2>
    <h2>grnd_level: ${currentDay3.list[17].main.grnd_level}</h2>
	<h2>date: ${currentDay3.list[17].dt_txt}</h2>`;
};
const createWeatherHTML4 = (currentDay4) => {
	console.log(currentDay4);
	return ` <h2>Temperature: ${kelvinToFahrenheit(currentDay4.list[30].main.temp)}&deg;F</h2>
	<h2>temp_max: ${currentDay4.list[25].main.temp_max}</h2>
	<h2>temp_min: ${currentDay4.list[25].main.temp_min}</h2>
	<h2>Condition: ${currentDay4.list[25].weather[0].description}</h2>
	<h2>sea_level: ${currentDay4.list[25].main.sea_level}</h2>
    <h2>grnd_level: ${currentDay4.list[25].main.grnd_level}</h2>
	<h2>date: ${currentDay4.list[25].dt_txt}</h2>`;
};
const createWeatherHTML5 = (currentDay5) => {
	console.log(currentDay5);
	return ` <h2>Temperature: ${kelvinToFahrenheit(currentDay5.list[30].main.temp)}&deg;F</h2>
	<h2>temp_max: ${currentDay5.list[30].main.temp_max}</h2>
	<h2>temp_min: ${currentDay5.list[30].main.temp_min}</h2>
	<h2>Condition: ${currentDay5.list[30].weather[0].description}</h2>
	<h2>sea_level: ${currentDay5.list[30].main.sea_level}</h2>
    <h2>grnd_level: ${currentDay5.list[30].main.grnd_level}</h2>
	<h2>date: ${currentDay5.list[30].dt_txt}</h2>`;
};
const createWeatherHTML12 = (currentDay12) => {
	//var inputValue=currentDay3.[0].lat
	console.log(currentDay12);
	return `<h2>co:${currentDay12.list[0].components.co}</h2>
	<h2>no:${currentDay12.list[0].components.no}</h2>
	<h2>no2:${currentDay12.list[0].components.no2}</h2>
	<h2>o3:${currentDay12.list[0].components.o3}</h2>
	<h2>so2:${currentDay12.list[0].components.so2}</h2>`;
};
/*const createWeatherHTML3 = (currentDay3) => {
	return `<img src=${currentDay3.hits[0].webformatURL}>`

};*/


const kelvinToFahrenheit = (k) => ((k - 273.15) * 9 / 5 + 32).toFixed(0);