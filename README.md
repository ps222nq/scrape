# scrape
Scraper utility in Node.js
   
Designed to be allround, configure what to scrape and how to store data through config file and models.
By default the app will create a JSON file in the `results` directory with the results of the scrape

## Getting started

Follow these steps to use the scraper:

### 0: Local install

* Clone this repository
* `npm install`
* `touch config/Config.js`

### 1: Configure the URL(s) to scrape

* in the `config` directory, open the file called `Config.js` 
* this file should export a module `Config` with the properties `baseUrl` (String) and `urlPaths` (String Array)  

### 2: Create the data models and controller functions

* in `models/`, add modules that export constructors for the type of data you want to store
* in `lib/`, add modules that take the HTML data and use it to create instances of the models

### 3: Check the flow in index.js

The flow should be:

1. HTML is fetched
2. Necessary operations are performed to create instances of the models from HTML data
3. Functions are called that transform the JS objects to JSON strings and write to file 

### 4: Run the scraper

* `npm start`