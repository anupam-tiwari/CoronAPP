
import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native"
import Expo from "expo"




export default function log(){
    const [signedIn, setsignedIn] = useState(false);
    const [name, setname] = useState('');
    const [photoUrl, setphotoUrl] = useState('');


    const signIn = async () => {
        try {
          const result = await Expo.Google.logInAsync({
            
            androidClientId:"1077660630933-fja4pulhkqb1de5c57ca46f9b548rukh.apps.googleusercontent.com",
             iosClientId: "1077660630933-fja4pulhkqb1de5c57ca46f9b548rukh.apps.googleusercontent.com", 
            scopes: ["profile", "email"]
          })
          if (result.type === "success") {
        
            setsignedIn(true);
            setname(result.user.name);
            setphotoUrl(result.user.photoUrl);
          } else {
            console.log("cancelled")
          }
    } catch (e) {
          console.log("error", e)
        }
    }

    const LoginPage = () => {
        return (
          <View>
            <Text style={styles.header}>Sign In With Google</Text>
            <Button title="Sign in with Google" 
             onPress={() => signIn()} />
          </View>
        )
      }

      const LoggedInPage = () => {
        return (
          <View style={styles.container}>
            <Text style={styles.header}>Welcome:{name}</Text>
            <Image style={styles.image} source={{ uri: photoUrl }}/>
          </View>
        )
      }

    
        return (
          <View style={styles.container}>
            {signedIn ? (
              <LoggedInPage name={name} photoUrl={photoUrl} />
            ) : (
              <LoginPage signIn={signIn} />
            )}
          </View>
        )
    
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    header: {
      fontSize: 25
    },
    image: {
      marginTop: 15,
      width: 150,
      height: 150,
      borderColor: "rgba(0,0,0,0.2)",
      borderWidth: 3,
      borderRadius: 150
    }
  })