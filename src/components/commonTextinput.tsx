import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

interface TextInputProps {
  placeHolder: string,
  value: string,
  onChangeText: (text: string) => void
}

const CommonTextinput = ({ placeHolder, value, onChangeText }: TextInputProps) => {

  return (
    <TextInput
      placeholder={placeHolder}
      placeholderTextColor={'gray'}
      style={styles.textInput}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default CommonTextinput;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
  },
});
