![Simulator Screen Shot - iPhone 12 - 2022-09-19 at 20 12 32](https://user-images.githubusercontent.com/57765690/191111629-54f74a84-9a62-4e9c-8518-dfc53c7733b2.png)
# Overview

My FikaSearch app involves two functional components, the Movie component and the Searchbar component. All of the data fetching and controlling is done in the App.js and the components files give the code reusability for each movie as its rendered. I've created an object to store the movie data which is then used to populate the Movie components. I have tested this app on iOS simulator (iPhone 12). 

## Next steps
If I had more time to work on this, I would have taken more steps to refactor so that I could use react native testing library or Jest to test the app before deployment. I also would have made sure to sanitise the data in the API query (although I believe this is built in for React and potentially on the API side as well). I would also have liked to make a seperate page UI to "Discover" new movies and a page which loads a seperate view when a search is made, similar to Netflix's UI. I also would have liked to have included more of the data from the json response in the movie list such as the description of the movie, the reviews etc. Also, showing some sort of placeholder image when a poster image has not yet loaded would make for better UI as currently, the app just shows a black square when the image has not loaded or is unavailable. In addition to this, I would have liked to refactor into a cleaner MVC structure if more data were to be involved.
---------------------------------------------------------------------------------------------------------

# FikaSearch Exercise

The objective of this exercise is to fork this repository and create a `react-native` app called 'FikaSearch'. This app will comprise of a listing page of films and the names of their genres. The page should also allow the user to search the films by typing into a text field.

We expect you to have an understandable structure, clean code, and to be able to describe your next steps in any aspects of the challenge you arent able to complete in a few of hours.

## Technical details

### API
You will need to use the following URLs to fetch the films and genres from `the movie db` API:

movies - [https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false](https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false)

movies search - [https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=searchterm](https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=shrek)

genres - [https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US](https://developers.themoviedb.org/3/genres/get-movie-list)

#### Images

The API will provide part of the image url via the `poster_path` field of each film. It must be combined with the base image path `https://image.tmdb.org/t/p/w500/`

**Have fun!**
