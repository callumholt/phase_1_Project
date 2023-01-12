## Welcome To My Weather API Project from rapidAPI

The purpose of this project is to demonstrate the use of fetch and post requests with a publically assessable API along with demonstrate usage of Javascript event listeners and DOM manipulation.

## Dependencies

This project will require setting up a local JSON-Server for full functionality.

Please find instructions on how to do that below:

## JSON-Server

### What is JSON Server?

JSON Server is a freely available Node package that can turn a JSON file on your computer into mock data storage. When JSON Server is running, we can send requests to get data from storage or add data to it, as though we were talking to a server with a database.

A huge benefit of JSON Server is that we don't have to spend much time setting the mock server up, allowing us to focus on developing the frontend of an application first.

### Setting up JSON Server
To start using JSON Server, we need to install it, then provide a basic set of data to practice with.

First, we'll install JSON Server globally on your machine:

### '$ npm install -g json-server'

With the command above, you should now be able to spin up a mock server from any directory on your computer. Alternatively, if you remove the -g option from this command but are in a folder with a package.json file, json-server will be added as a dependency in the file.

Next, we'll need to create a file that will act as our data storage.

### '$ touch db.json'

## Start the Server

To start JSON Server, run the following command from the same directory that db.json is in:

### '$ json-server --watch db.json'

When run, you'll see some messaging about how to access our JSON data. By default, JSON Server will start up on port 3000. You should see a notice that you can access the server at http://localhost:3000/Weather.

Open your browser and paste this URL in. If the server is running correctly, you should be presented with a page of information provided by JSON Server. 

For further detailed information please visit: 

### https://www.npmjs.com/package/json-server#getting-started