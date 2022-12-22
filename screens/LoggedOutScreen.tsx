import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, Button, TextInput, Alert,
  KeyboardAvoidingView } from 'react-native';
import Colors from '../constants/Colors';
import alert from '../constants/Alert';

////// https://blog.logrocket.com/integrating-firebase-authentication-expo-mobile-app/

type TabName = "login" | "signup" | "reset";

export default function CollectScreen() {
  const [tab, setTab] = useState<TabName>("login");
  const [email, onChangeEmail] = useState<string>("");
  const [password, onChangePassword] = useState<string>("");
  const [password2, onChangePassword2] = useState<string>("");

  const onEnterButton = () => {
    if (tab === "login"){
      alert("Login");
    } else if (tab === "signup"){
      alert("Signup");
    } else  if (tab === "reset"){
      alert("Reset");
    }
  };

  const renderTabs: { [key in TabName]: JSX.Element } = {
    "login": <View style={styles.switchableTab}>
      <Text style={styles.title}>Welcome back</Text>

      <KeyboardAvoidingView>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
        />
      </KeyboardAvoidingView>
      <Button title="Log in" onPress={onEnterButton} />

      <Pressable style={styles.pressable} onPress={() => setTab("reset")}>
        <Text style={styles.pressableText}>Forgot Password</Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => setTab("signup")}>
        <Text style={styles.pressableText}>Create Account</Text>
      </Pressable>
    </View>,

    "signup": <View style={styles.switchableTab}>
      <Text style={styles.title}>Create account</Text>

      <KeyboardAvoidingView>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
        />
        <Text style={styles.inputLabel}>Confirm password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword2}
          value={password2}
        />
      </KeyboardAvoidingView>
      <Button title="Sign up" onPress={onEnterButton} />

      <Pressable style={styles.pressable} onPress={() => setTab("login")}>
        <Text style={styles.pressableText}>Log in</Text>
      </Pressable>
    </View>,

    "reset": <View style={styles.switchableTab}>
      <Text style={styles.title}>Reset password</Text>

      <KeyboardAvoidingView>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
      </KeyboardAvoidingView>
      <Button title="Send link" onPress={onEnterButton} />

      <Pressable style={styles.pressable} onPress={() => setTab("login")}>
        <Text style={styles.pressableText}>Log in</Text>
      </Pressable>
    </View>
  };

  return (
    <View style={{marginTop: 30}}>
      {renderTabs[tab]}
      
      {/* ///////// providers */}

    </View>
  );
}



const styles = StyleSheet.create({
  title: {
    color: Colors.text
  },

  inputLabel: {
    color: Colors.text
  },
  input: {
    backgroundColor: "#fff"
  },

  pressable: {
    
  },
  pressableText: {
    fontSize: 20,
    color: Colors.text
  },

  

  switchableTab: {

  }
});