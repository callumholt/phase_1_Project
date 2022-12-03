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


// fetch("http://www.7timer.info/bin/api.pl?lon=144.96751000000006&lat=-37.81738999999993&product=astro&output=json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then((data) => console.log(data));



/*
document.querySelector("#cityLocationSubmit").addEventListener(onclick,submitlocation);

let cityName= "";

function submitlocation() {
	let cityName = document.querySelector("#cityLocation").name;
	return cityName;
};
*/
//-----

// let cityName = document.getElementById("city").innerHTML;
// console.log(cityName);

//below i will take form input and store with a js variable:

// document.getElementById("submitButton").addEventListener("onclick", userinput);


function userinput() {

	let input = document.getElementById("cityLocation").value;
	alert(cityLocation)
	
	// let fetchUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${input}`;

	// fetch(fetchUrl, options)
	// 	.then(response => response.json())
	// 	.then(data => alert("this is inside userinput - ", data))
	// 	.catch(err => console.error(err));
	

}

//------

/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '83a3548fb3msh4cc44d3bbaad65ep17ec72jsn568624b2044a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
*/
// let fetchUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`;
// console.log(fetchUrl);

// fetch(fetchUrl, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// let fetchUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${input}`;

function returnText(){
    input = document.getElementById("userInput").value;

	fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${input}`, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '83a3548fb3msh4cc44d3bbaad65ep17ec72jsn568624b2044a',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	})

	// document.querySelector("h2") ? document.querySelector("h2").innerHTML = "" : ""; 

	

	 	.then(response => response.json())
		.then((data) =>  {
			
			let currentTemp = data.current.temp_c;
			let para = document.getElementById("currentTempPara");
			let h2 = document.getElementById("temp");
			// let h2 = document.createElement('h2');
			h2.innerHTML = currentTemp;
			
			console.log(currentTemp)
		})

	 	.catch(err => console.error(err));
	
}

function removeH2() {
	if (document.querySelector("#currentTempPara:first-child")) {
		document.querySelector("#currentTempPara:first-child").remove();
		}
}

//I want to display the temperature as text onto the DOM
//this will involve, create an element, setting that element to a variable, 
//then making that variable equal to the data from the fetch
