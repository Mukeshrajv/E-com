import React, { createContext,useState} from "react";
import axios from 'axios';
// import { BASE_URL } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActionSheetIOS } from "react-native";
export const AuthContext =  createContext();


// console.log("Function Check");
//     const apiUrl = 'https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=create&table=mobile_app_users&name=Yuvaraj&email=yuvaraj.p@desss.com&password=dess@123';
//     axios.post(apiUrl)
//        .then((response) => {
//         console.log('API Response', response);
//     })
//     .catch((error) => {
//       console.log('API Error', error);
//     });



export function AuthProvider ({children}) {

    const encodedUsername = encodeURIComponent(name);
    const encodedPassword = encodeURIComponent(password);
    const encodedEmail = encodeURIComponent(email);  
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [user,setUser]=useState([]);
    const[userInfo,setUserInfo]=useState({});
    const[isLoading,setIsLoading]=useState(false);

   

    
    return(
    <AuthContext.Provider value={{
        isLoading,
        userInfo,
        // register,
        // login
        }}>
        {children}
        </AuthContext.Provider>
    );
};