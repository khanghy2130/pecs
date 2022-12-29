import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, PressableProps, Button, TextInput,
  KeyboardAvoidingView } from 'react-native';

import { StyledText, StyledTextLight } from '../components/StyledText';
import Colors from '../constants/Colors';
import alert from '../constants/Alert';
import { FontAwesome } from '@expo/vector-icons';

import Constants from 'expo-constants';

////// https://blog.logrocket.com/integrating-firebase-authentication-expo-mobile-app/

type TabName = "login" | "signup" | "reset";


const renderBottomButton = (
  labelText: string, action: PressableProps["onPress"]
): JSX.Element => {
  return <Pressable style={styles.pressable} onPress={action}>
    <StyledText style={styles.pressableText}>{labelText}</StyledText>
  </Pressable>;
}

export default function CollectScreen() {
  const [tab, setTab] = useState<TabName>("login");
  const [email, onChangeEmail] = useState<string>("");
  const [password, onChangePassword] = useState<string>("");
  const [password2, onChangePassword2] = useState<string>("");

  // reset inputs on tab switch
  useEffect(() => {
    onChangeEmail("");
    onChangePassword("");
    onChangePassword2("");
  }, [tab]);

  const onEnterButton = () => {
    if (tab === "login"){
      alert("Login");
    } else if (tab === "signup"){
      alert("Signup");
    } else  if (tab === "reset"){
      alert("Reset");
    }
  };


  return (
    <View style={{marginTop: 30}}>
      {
        {
          "login": <View style={styles.switchableTab}>
            <StyledTextLight style={styles.title}>Welcome back</StyledTextLight>
      
            <KeyboardAvoidingView>
              <StyledText style={styles.inputLabel}>Email</StyledText>
              <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                textContentType="emailAddress"
              />
              <StyledText style={styles.inputLabel}>Password</StyledText>
              <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                textContentType="password"
                secureTextEntry={true}
                autoCapitalize={"none"}
              />
            </KeyboardAvoidingView>
            <Button title="Log in" onPress={onEnterButton} />
      
            {renderBottomButton("Forgot Password", () => setTab("reset"))}
            {renderBottomButton("Create Account", () => setTab("signup"))}
            {renderBottomButton("Use Guest Account", () => {
              onChangeEmail(Constants.manifest?.extra?.guestEmail);
              onChangePassword(Constants.manifest?.extra?.guestPassword);
            })}

          </View>,
      
          "signup": <View style={styles.switchableTab}>
            <StyledTextLight style={styles.title}>Create account</StyledTextLight>
      
            <KeyboardAvoidingView>
              <StyledText style={styles.inputLabel}>Email</StyledText>
              <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                textContentType="emailAddress"
              />
              <StyledText style={styles.inputLabel}>Password</StyledText>
              <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                textContentType="password"
                secureTextEntry={true}
                autoCapitalize={"none"}
              />
              <StyledText style={styles.inputLabel}>Confirm password</StyledText>
              <TextInput
                style={styles.input}
                onChangeText={onChangePassword2}
                value={password2}
                textContentType="password"
                secureTextEntry={true}
                autoCapitalize={"none"}
              />
            </KeyboardAvoidingView>
            <Button title="Sign up" onPress={onEnterButton} />
            {renderBottomButton("Log In", () => setTab("login"))}
          </View>,
      
          "reset": <View style={styles.switchableTab}>
            <StyledTextLight style={styles.title}>Reset password</StyledTextLight>
      
            <KeyboardAvoidingView>
              <StyledText style={styles.inputLabel}>Email</StyledText>
              <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                textContentType="emailAddress"
              />
            </KeyboardAvoidingView>
            <Button title="Send link" onPress={onEnterButton} />
            {renderBottomButton("Log In", () => setTab("login"))}
          </View>
        }[tab]
      }

      
      
      <Button 
        title='Continue with Google'
        onPress={() => {
          
        }}
      />

    </View>
  );
}



const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },

  inputLabel: {
    fontSize: 20
  },
  input: {
    backgroundColor: Colors.text,
    color: Colors.background
  },

  pressable: {
    
  },
  pressableText: {
    fontSize: 20,
    fontFamily: "lgc-normal",
    color: Colors.text
  },

  

  switchableTab: {

  }
});