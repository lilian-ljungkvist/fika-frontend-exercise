import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Movie = props => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          source={{
            uri: props.imgURL,
          }}
        />
        <Text style={styles.movieTitle}>{props.title}</Text>
        <Text style={styles.movieGenres}>{props.genre.join(', ')}</Text>
      </View>
    </>
  );
};

Movie.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.array,
  imgURL: PropTypes.string,
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  movieTitle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
  },
  movieGenres: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '200',
  },
  stretch: {
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 15,
    alignSelf: 'center',
    width: 200,
    height: 300,
    resizeMode: 'stretch',
  },
});
export default Movie;
