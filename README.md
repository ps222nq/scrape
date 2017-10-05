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

### 2: Create the data models

* in `models/`, add modules that export constructors for the type of data you want to store

### 3: Run the scraper

* `npm start`