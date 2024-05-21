const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5328a620amsh3a10c52c7bce5bfp1afcb7jsnb2ce5acd5a48',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function fetchdata(city){
try {
document.getElementById("cityName").innerHTML=city;
const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
const result = await response.json();
console.log(result);
document.getElementById("cloud_pct").innerText = result.cloud_pct
document.getElementById("temp").innerHTML=result.temp
document.getElementById("feels_like").innerText = result.feels_like
document.getElementById("humidity").innerText=result.humidity
document.getElementById("min_temp").innerText=result.min_temp
document.getElementById("max_temp").innerText=result.max_temp
document.getElementById("wind_speed").innerHTML=result.wind_speed
document.getElementById("wind_degrees").innerHTML= result.wind_degrees
document.getElementById("sunrise").innerHTML=result.sunrise
document.getElementById("sunset").innerHTML=result.sunset
 
} catch (error) {
	console.error(error);
}
}
fetchdata("Delhi");
document.getElementById("inp").addEventListener("input",(city)=>{
	const inputValue = city.target.value;
})
document.getElementById("sub").addEventListener("click",(city)=>{
	city.preventDefault();
	const cityInput = document.getElementById("inp").value;
	fetchdata(cityInput);
})
async function fetchdats(city){
	try {
	const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
	const result = await response.json();
	console.log(result);
	document.getElementById("cloud_pcts").innerText = result.cloud_pct
	document.getElementById("temps").innerHTML=result.temp
	document.getElementById("feels_likes").innerText = result.feels_like
	document.getElementById("humiditys").innerText=result.humidity
	document.getElementById("min_temps").innerText=result.min_temp
	document.getElementById("max_temps").innerText=result.max_temp
	document.getElementById("wind_speeds").innerHTML=result.wind_speed
	document.getElementById("wind_degreess").innerHTML= result.wind_degrees
	document.getElementById("sunrises").innerHTML=result.sunrise
	 
	} catch (error) {
		console.error(error);
	}
	}
	fetchdats("Shanghai");
	async function fetchdatb(city){
		try {
		const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
		const result = await response.json();
		console.log(result);
		document.getElementById("cloud_pctb").innerText = result.cloud_pct
		document.getElementById("tempb").innerHTML=result.temp
		document.getElementById("feels_likeb").innerText = result.feels_like
		document.getElementById("humidityb").innerText=result.humidity
		document.getElementById("min_tempb").innerText=result.min_temp
		document.getElementById("max_tempb").innerText=result.max_temp
		document.getElementById("wind_speedb").innerHTML=result.wind_speed
		document.getElementById("wind_degreesb").innerHTML= result.wind_degrees
		document.getElementById("sunriseb").innerHTML=result.sunrise
		 
		} catch (error) {
			console.error(error);
		}
		}
		fetchdatb("Boston");
		async function fetchdatk(city){
			try {
			const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
			const result = await response.json();
			console.log(result);
			document.getElementById("cloud_pctk").innerText = result.cloud_pct
			document.getElementById("tempk").innerHTML=result.temp
			document.getElementById("feels_likek").innerText = result.feels_like
			document.getElementById("humidityk").innerText=result.humidity
			document.getElementById("min_tempk").innerText=result.min_temp
			document.getElementById("max_tempk").innerText=result.max_temp
			document.getElementById("wind_speedk").innerHTML=result.wind_speed
			document.getElementById("wind_degreesk").innerHTML= result.wind_degrees
			document.getElementById("sunrisek").innerHTML=result.sunrise
			 
			} catch (error) {
				console.error(error);
			}
			}
			fetchdatk("Kolkata");
			async function fetchdatl(city){
				try {
				const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
				const result = await response.json();
				console.log(result);
				document.getElementById("cloud_pctl").innerText = result.cloud_pct
				document.getElementById("templ").innerHTML=result.temp
				document.getElementById("feels_likel").innerText = result.feels_like
				document.getElementById("humidityl").innerText=result.humidity
				document.getElementById("min_templ").innerText=result.min_temp
				document.getElementById("max_templ").innerText=result.max_temp
				document.getElementById("wind_speedl").innerHTML=result.wind_speed
				document.getElementById("wind_degreesl").innerHTML= result.wind_degrees
				document.getElementById("sunrisel").innerHTML=result.sunrise
				 
				} catch (error) {
					console.error(error);
				}
				}
				fetchdatl("London");
				async function fetchdatu(city){
					try {
					const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
					const result = await response.json();
					console.log(result);
					document.getElementById("cloud_pctu").innerText = result.cloud_pct
					document.getElementById("tempu").innerHTML=result.temp
					document.getElementById("feels_likeu").innerText = result.feels_like
					document.getElementById("humidityu").innerText=result.humidity
					document.getElementById("min_tempu").innerText=result.min_temp
					document.getElementById("max_tempu").innerText=result.max_temp
					document.getElementById("wind_speedu").innerHTML=result.wind_speed
					document.getElementById("wind_degreesu").innerHTML= result.wind_degrees
					document.getElementById("sunriseu").innerHTML=result.sunrise
					 
					} catch (error) {
						console.error(error);
					}
					}
					fetchdatu("Lucknow");
					async function fetchdati(city){
						try {
						const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
						const result = await response.json();
						console.log(result);
						document.getElementById("cloud_pcti").innerText = result.cloud_pct
						document.getElementById("tempi").innerHTML=result.temp
						document.getElementById("feels_likei").innerText = result.feels_like
						document.getElementById("humidityi").innerText=result.humidity
						document.getElementById("min_tempi").innerText=result.min_temp
						document.getElementById("max_tempi").innerText=result.max_temp
						document.getElementById("wind_speedi").innerHTML=result.wind_speed
						document.getElementById("wind_degreesi").innerHTML= result.wind_degrees
						document.getElementById("sunrisei").innerHTML=result.sunrise
						 
						} catch (error) {
							console.error(error);
						}
						}
						fetchdati("Istanbul");
						