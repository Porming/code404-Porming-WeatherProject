# [Demo Weather App](https://weather-app-lilac-omega.vercel.app/)
I choose **Vercel** hosting platform to host this project.

# Table of Content
1. [Weather App](#weather-app)
2. [Teach stack](#teach-stack)
3. [Convention Guide](#convention-guide---weather-app-project)
4. [Figma Design](#figma-uiux-design)
5. [App Flow](#app-flow)
6. [Notion](#notion)
7. [Git Flow method](#git-flow-method)
8. [Process of making the app](#process-of-making-this-weather-app)
9. [Key Learning & Improvement](#key-learning--improvement)

# Weather App
This Weather App, It display the weather of the current location depends on user's location by fetch the current geolocation than request the data from OpenWeatherMap API.

This is Weather App built using React, OpenWeatherMap API, and style with CSS. The UI/UX of the app was originally designed on Figma. It also responsive depends on user's device.

### Teach stack :
* React
* [OpenWeatherAPI](https://openweathermap.org/api)
* CSS
* Figma
* Vercel
* Notion

# Convention Guide - Weather App Project
### Link to the convention guide [Convention Guide Details](https://www.notion.so/Convention-Guide-Weather-App-4ddc1cfae5c74940876cbb57b2bf8391)

# Figma UI/UX Design
### Link to Figma design [Weather App Figma Design](https://www.figma.com/file/6VdqihcJJ1rU9WiqcHqa6e/Weather-app?type=design&node-id=0-1&mode=design&t=hK3ilAosU9aHi7UC-0)

# App Flow
### Link to App flow [Weather App Flow](https://drive.google.com/file/d/1aj8nqyXBdTQw4BnsW9q2xrnddjAB7gTc/view?usp=sharing)

# Notion
### Link to Notion [Notion Weather App Project](https://www.notion.so/Porming-Code404s-323b3f30d8ac4b1693a6e7d86a8c4deb?p=a22302f16b304dd483b1b82ce410e9f1&pm=c)

# Git Flow Method
I used the Git Flow method for Todo List app project. This method helped me to manage my code changes effectively.

### 1. Main Branch
* Represents the stable and production-ready version.
### 2. Develop Branch
* Serves as the integration branch for ongoing development.
* Any feature that created are merged into develop branch
* Represents the latest state of the application with features being developed.
### 3. Feature Branches
* Responsible for app features
* Feature branches
    * feature/weathertemp
    * feature/forecasttemp
### 4. Release Branches
* To prepare a new version of todo app for release:
    * Create a release branch from the develop branch.
    * Perform testing, bug fixes, and any final adjustments specific to the release.

### 5. Bugfix Branches
* If the code changes made from the feature branch were rejected after a release, sprint or demo, any necessary fixes after that should be done on the bugfix branch.

### 6. Hotfix Branches
* used to quickly patch production releases. Hotfix branches are a lot like release branches and feature branches except they're based on main instead of develop.
### [Convention Guide Reference](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

# Process of Making this Weather App 
### 1. Set Up My Development Environment
* I use React vite library for this project

### 2. API 
* I use an API key to fetch weather data from weather API service **OpenWeatherMap**
* API Endpoint:
    * Current Weather Data API
    * 5 Day / 3 Hour Forecast

### 3. Components
* React components for this application
    * `CurrentTemp.jsx` : to display the current weather of user's location
    * `ForecastTemp.jsx` : to display the forecast weather of user's location

### 4. Fetch Data
* I use JavaScript Geolocation API provides access to geographical location data associated with a user's device. [Reference](https://www.educative.io/answers/how-to-use-geolocation-call-in-reactjs)
* After getting user's location(latitude and longtitude), I pass that data to weather API
* I use `'fetch'` library to make API requests to weather service with API key from **OpenWeatherMap**

### 5. Display Weather Data
* Current weather data
    * I display weather data(temperature, humidity, windspeed, min-max temperature, city name, weather description and icon)from **(Current Weather Data API)** provide by **OpenWeatherMap** in `App.jsx` file by create the prop pass to `CurrentTemp.jsx` component.
    * In `CurrentTemp.jsx`, I take all the prop that pass from `App.jsx` and display it out 
    * For current date, I use javascript built-in module to convert current date to day in week 
* Forecast weather data
    * First, I fetch data from **(5 Day / 3 Hour Forecast)** provide by **OpenWeatherMap** in `App.jsx` file, I create a list to store the data of next 4 days by using for loop to take datas(temperature, weather description, icon) from the list of API data. After that I create prop pass to `ForecastTemp.jsx` component.
    * In `ForecastTemp.jsx`, I take all the prop that pass from `App.jsx` and display it out 

### 6. Maintenance
* I use version control(git) to keep track of changes.

# Key Learning & Improvement
When working on this weather project, I have gained valuable key knowledge:
* **API Request :** I have learned how to work with external APIs to fetch data. and learned how to authenticate my requests using API keys.
* **Fetch Data from API :** I have learned how to handle date received from API by dealing with async/await, and callback functions to handle asynchronous operations.
* **User Location Detection :** I have explored the Geolocation API to detect the user's location. This involves understanding how to request and use the user's latitude and longitude coordinates.
* **useEffect :** I know how to use `useEffect` to perform tasks like data fetching, subscribing to data sources when component updates.
* **Accessing JSON file :** I have gained experience in parsing JSON data. Knowing how to navigate and extract data from JSON objects and arrays.

By doing this project and feedback from the previous project, I have made some improvements:
* **useState :** I have improved my skill of managing state, making me easier to handle dynamic data in my application
* **Components divided :** Dividing only the necessary component
* **Folder and File Structure :** naming the components, file, folder more clear 
* **Error Handling :** raise a message when there is no data detching

