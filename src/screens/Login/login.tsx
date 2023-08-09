import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CommonTextinput from '../../components/commonTextinput';
import LoginService from '../../services/loginService';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { handleValidEmail, pushView } from '../../utils/commonFunction';
import { styles } from './login.style'

interface ValidationErrorType {
  errorName: string
}

//NOTE: Validation View
const ValidationError = ({ errorName }: ValidationErrorType) => {
  return (
    <View
      style={{
        marginTop: 15,
      }}>
      <Text
        style={{
          color: 'red',
        }}>
        {errorName}
      </Text>
    </View>
  );
};

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [emailValidError, setEmailValidError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>("");
  const [showEmailError, setShowEmailError] = useState<boolean>(false);
  const [showPwdError, setShowPwdError] = useState<boolean>(false);

  const handleValidation = () => {
    if (password === '') {
      setPasswordError('Plaese Enter Your Password');
      setShowPwdError(true);
    }
    if (email === '') {
      setEmailValidError('Please Enter Your Email');
      setShowEmailError(true);
    }
  };

  //NOTE: Api Call
  const callApi = async () => {
    const response = await LoginService.postLogin({
      user: { email: email, password: password },
    });
    if (response?.user != undefined) {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + response?.user?.token;
      pushView(navigation, "Posts", { loggedIn: true });
    } else {
      Alert.alert('Alert', 'Wrong Credentials');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text>Login Form</Text>

      <CommonTextinput
        placeHolder={'Enetr Your Email'}
        value={email}
        onChangeText={value => {
          setEmail(value);
          setShowEmailError(false);
          handleValidEmail(value, setEmailValidError, setShowEmailError);
        }}
      />
      {(email === '' || emailValidError) && showEmailError && (
        <ValidationError errorName={emailValidError} />
      )}
      <CommonTextinput
        placeHolder={'Enetr Your Password'}
        value={password}
        onChangeText={e => {
          setPassword(e);
          setShowPwdError(false);
        }}
      />
      {passwordError?.length > 0 && showPwdError && (
        <ValidationError errorName={passwordError} />
      )}

      <TouchableOpacity
        onPress={() => {
          if (password !== '' && email != '' && emailValidError === '') {
            callApi();
          } else {
            handleValidation();
          }
        }}
        style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          pushView(navigation, "Posts", { loggedIn: false });
        }}
        style={styles.loginButton}>
        <Text style={styles.loginText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
