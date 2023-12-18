import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";


const Login = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    const response = await axios.post("/api/login", {
      username,
      password,
    });

    if (response.status === 200) {
      const user = response.data;
      // Store the user data in AsyncStorage
      await AsyncStorage.setItem("user", JSON.stringify(user));
      // Navigate to the home screen
      // TODO: replace with your home screen component
      alert("User logged in successfully!");
    } else {
      console.log("Error logging in user");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={onLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default { Login };