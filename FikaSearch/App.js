import {React, useEffect, useState, useMemo} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import SearchBar from './components/SearchBar';
import Movie from './components/Movie';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [genresTable, setGenresTable] = useState([]);

  class MovieData {
    constructor(_title, _genre, _imgURL) {
      this.title = _title;
      this.genre = _genre;
      this.imgURL = _imgURL;
    }
  }
  //Fetch search result from input text
  const onSearch = text => {
    setMovies([]);
    const searchDB = `https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&query=${text.toString()}&page=1&include_adult=false`;
    fetch(searchDB)
      .then(function (response) {
        if (
          response === null ||
          response === '' ||
          typeof response === 'undefined'
        ) {
          setMovies([]);
        } else {
          response.json().then(function (movies) {
            if (
              movies.results === null ||
              movies.results === '' ||
              typeof movies.results === 'undefined'
            ) {
              setMovies([]);
            } else {
              movies.results.forEach(function (result) {
                let imgRes;
                fetch(
                  `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
                ).then(function (_imgRes) {
                  imgRes = _imgRes.url;

                  let newMovie = new MovieData(
                    result.title,
                    result.genre_ids,
                    imgRes,
                  );
                  setMovies(movies => [...movies, newMovie]);
                });
              });
            }
          });
        }
      })
      .catch(err => console.error(err));
  };
  //Fetch JSON data for movie catalogue
  const fetchMovies = () => {
    const movieDB =
      'https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false';
    fetch(movieDB)
      .then(function (response) {
        response.json().then(function (movies) {
          movies.results.forEach(function (result) {
            let imgRes;
            fetch(`https://image.tmdb.org/t/p/w500/${result.poster_path}`).then(
              function (_imgRes) {
                imgRes = _imgRes.url;

                let newMovie = new MovieData(
                  result.title,
                  result.genre_ids,
                  imgRes,
                );
                setMovies(movies => [...movies, newMovie]);
              },
            );
          });
        });
      })
      .catch(err => console.error(err));
  };
  const fetchGenres = () => {
    const genreDB =
      'https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false';
    fetch(genreDB).then(function (response) {
      response.json().then(function (genresList) {
        genresList.genres.forEach(function (genre) {
          setGenresTable(genresTable => [...genresTable, genre]);
        });
      });
    });
  };
  const lookupId = movieGenreId => {
    let movieGenreName;
    for (let genre of genresTable) {
      if (movieGenreId == genre.id) {
        movieGenreName = genre.name;
      }
    }
    return movieGenreName;
  };
  const renderMovie = index => {
    //map genre ids
    const genreNames = movies[index].genre.map(lookupId);
    return (
      <>
        <Movie
          key={index}
          title={movies[index].title}
          genre={genreNames}
          imgURL={movies[index].imgURL}
        />
      </>
    );
  };
  const renderMoviesList = () => {
    let moviesList = [];
    for (let i = 0; i < movies.length; i++) {
      moviesList.push(renderMovie(i));
    }
    if (moviesList.length > 0) {
      return <>{moviesList}</>;
    } else {
      return (
        <>
          <Text style={styles.errorText}>
            Sorry, we couldn't find any movies that match your search
          </Text>
        </>
      );
    }
  };
  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.title}>
        <Text style={styles.titleText}>Fika Search</Text>
      </View>
      <SearchBar onSearch={onSearch} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.mainView}>
        <View>{useMemo(() => renderMoviesList(), [movies])}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'black',
  },
  title: {
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 32,
    fontWeight: '800',
  },
  errorText: {
    fontSize: 24,
    fontWeight: '300',
    color: 'white',
  },
});

export default App;
