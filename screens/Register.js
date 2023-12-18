import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Register = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = async () => {
    const response = await axios.post("/api/register", {
      username,
      password,
    });

    if (response.status === 200) {
      alert("User registered successfully!");
    } else {
      console.log("Error registering user");
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
      <Button title="Register" onPress={onRegister} />
    </View>
  );
};

export default { Register };