import {React, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
const SearchBar = props => {
  const [text, onChangeText] = useState('Search movie catalogue ...');

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      onEndEditing={() => props.onSearch(text)}
      value={text}
    />
  );
};
SearchBar.propTypes = {title: PropTypes.func};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    marginHorizontal: 20,
    marginVertical: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
export default SearchBar;
