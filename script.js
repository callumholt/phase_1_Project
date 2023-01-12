let input



function returnText()
{
    input = document.getElementById("userInput").value;

	fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${input}`, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '83a3548fb3msh4cc44d3bbaad65ep17ec72jsn568624b2044a',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	})
	
	 	.then(response => response.json())

		.then((data) =>  {

			currentTemp = data.current.temp_c;
			let h2 = document.getElementById("temp");
			h2.innerHTML = currentTemp;

			let nameOfCity = data.location.name;
			let cityName = document.getElementById("cityName");
			cityName.innerHTML = nameOfCity;
			
			let nameOfCountry = data.location.country;
			let countryName = document.getElementById("countryName");
			countryName.innerHTML = nameOfCountry;

			showHideTemp();

			document.getElementById("timeButton") ? "" : createCurrentTimeButton();
			timeButton = document.getElementById("timeButton");
			timeButton.addEventListener('mouseover', mouseOverFunction);
		})
	 	.catch(err => console.error(err));
	}
	

	function showHideTemp() {
		let currentTempElement = document.getElementById("currentTemp");
			if (currentTempElement.style.display === "none") {
				currentTempElement.style.display = "block";
			} 
		  }
	
	function createCurrentTimeButton() {
		let time = document.getElementById("currentTimeButton");
		let Button = document.createElement("button");
		Button.textContent="Hover over here to get the Local Time";
		Button.id = "timeButton";
		time.appendChild(Button);
	}
	

	function mouseOverFunction() {
		let input = document.getElementById("userInput").value;

		fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${input}`, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '83a3548fb3msh4cc44d3bbaad65ep17ec72jsn568624b2044a',
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
			}
		})
		
		.then((response)=> response.json())
		.then((data)=> {
			let localTime = data.location.localtime;
			let splitlocalTimeArray = localTime.split(" ");
			time = splitlocalTimeArray[1];

			document.getElementById("city_time") ? "" : createTimeElement();
			
			function createTimeElement() {
				let cityTime = document.createElement('h2');
				cityTime.id = "city_time";
				timeButton.appendChild(cityTime);
				cityTime.innerHTML = time;

				let saveButtonDiv = document.getElementById("save")
				saveButtonDiv.style.display = ""; 
			}
								
		})
	}

let saveButton = document.getElementById("saveButton")
saveButton.addEventListener('click',saveToServer);
	
function saveToServer() {

	let methodForPostRequest =
	{
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: "",
			city: `${input}`,
			Temp: `${currentTemp}`,
			localTime: `${time}`,
		})

	  }

	  fetch("http://localhost:3000/weather", methodForPostRequest)
	  .then((resp)=> resp.json())
	  .then((data)=> {
		if(data) {
			alert("Information was successfully saved to your account");
		}
	  })
	  .catch(err => alert("was unable to reach server"));

}

		
