/* What needs to happen for this SPA?

- need to have an input method on the SPA, aka a text box to submit a string of location.
- need a button to submit the input.
- on botton press (DOM event) the input needs to be added as a variable into the api as a GET request.
- the GET request will come back with string of location data, temperature etc
- need to convert the string into an object (.json() method) so that it we can iterate on it.
- need to take specific pieces of data from the object and set to const.
- need to use document.createelement to create a new element in the html which will 
be use for the data from the const above.
- need to take that const and push it to the dom using innerHTML.

resources:
https://rapidapi.com/weatherapi/api/weatherapi-com/


--------------
Use an API

Your entire app must run on a single page. 

Use at least 3 unique event-listeners Links to an external site. that enable interactivity. 
Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. 
Each of your event listeners should have its own unique callback function.

Your project must implement at least one instance of array iteration using available 
array methods (map, forEach, filter, etc). 


Manipulating your API data in some way should present an opportunity to implement your array iteration.

Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.


*/


function userinput() {

	let input = document.getElementById("cityLocation").value;
	alert(cityLocation)
	

}

// const fetchData;

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
			console.log(data);

			//setting current Temp
			currentTemp = data.current.temp_c;
			let para = document.getElementById("currentTempPara");
			let h2 = document.getElementById("temp");
			h2.innerHTML = currentTemp;
			console.log(currentTemp)


		//setting cityName and countryName

			//cityName
			let nameOfCity = data.location.name;
			let cityName = document.getElementById("cityName");
			cityName.innerHTML = nameOfCity;
			console.log(nameOfCity)
			
			//countryName
			let nameOfCountry = data.location.country;
			let countryName = document.getElementById("countryName");
			countryName.innerHTML = nameOfCountry;
			console.log(countryName)

			showHideTemp();

			document.getElementById("timeButton") ? "" : createCurrentTimeButton();
			timeButton = document.getElementById("timeButton");
			timeButton.addEventListener('mouseover', mouseOverFunction);
		})
	 	.catch(err => console.error(err));
	}
	
		//show/hide temp text

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
	
	//variables for mouseOverFunction
	

	function mouseOverFunction() {
		input = document.getElementById("userInput").value;

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
			let localTimeArray = JSON.stringify(localTime);
			let splitlocalTimeArray = localTime.split(" ");
			time = splitlocalTimeArray[1];

			document.getElementById("city_time") ? "" : createTimeElement();
			
			function createTimeElement() {
				let cityTime = document.createElement('h2');
				cityTime.id = "city_time";
				timeButton.appendChild(cityTime);
				cityTime.innerHTML = time;

				//show save button

				let saveButtonDiv = document.getElementById("save")
				saveButtonDiv.style.display = ""; 
			}
			
			console.log(time);
					
		})
	}

//event listener, listening to the click of button id="save"
let saveButton = document.getElementById("saveButton")
saveButton.addEventListener('click',saveToServer);

//console.log("global", input) //pointer event...?
//console.log("global", currentTemp) //undefined
//console.log("global", time) //undefined

// save the data to the server function	
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

		//just for storing if i need to reverse changes.
	

		/** 
		 body: JSON.stringify({
			id: "",
			city: "Darwin",
			Temp: "14",
			localTime: "9:00",
		})
		 */

	  }

	  fetch("http://localhost:3000/weather", methodForPostRequest)
	  console.log("saved to server");
	  console.log(methodForPostRequest);
	  console.log(input) //pointer event...?
	  console.log(currentTemp) //undefined
	  console.log(time) //undefined
}

		






/*
// Get a reference to the <button> element
var button = document.getElementById('myButton');

// Create the event listener function
function handleClick(event) {
  // Do something when the event occurs
}

// Attach the event listener to the <button> element
button.addEventListener('click', handleClick);

*/





