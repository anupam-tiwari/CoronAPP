/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View
} from "react-native";
import {
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  CardFive,
  CardSix,
  CardSeven,
  CardEight,
  CardNine,
  CardTen,
  CardEleven,
  CardTwelve,
  CardEcomOne,
  CardEcomTwo,
  CardEcomThree,
  CardEcomFour
} from "react-native-card-ui";

export default function health(){
  
    return (
      <SafeAreaView style={styles.container}>
        

<Text style={{fontWeight:"bold", fontSize:40}}>Health facilities</Text>
        <ScrollView>
        <CardSeven
            title={"Berkeley hospital"}
            subTitle={"852 N Virgil Ave, Berkeley"}
            image={{
              uri:
                "https://news.berkeley.edu/wp-content/uploads/2014/10/hospital410.jpg"
            }}
            icon1={"share"}
            iconColor1={"#fff"}
            iconBackground1={"#2f95dc"}
            onClicked1={() => {
              alert("Shared to your Whatsapp story!");
            }}
            icon2={"heart"}
            iconColor2={"#fff"}
            iconBackground2={"red"}
            onClicked2={() => {
              alert("You have been added to the hospital waiting list.");
            }}

        
          />

<CardSeven
            title={"Alta Bates Hospital"}
            subTitle={"842 North Virgil Ave, Berkeley"}
            image={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Alta_Bates_Summit_Medical_Center.jpg/1200px-Alta_Bates_Summit_Medical_Center.jpg"
            }}
            icon1={"share"}
            iconColor1={"#fff"}
            iconBackground1={"#2f95dc"}
            onClicked1={() => {
              alert("Shared to your Whatsapp story!");
            }}
            icon2={"heart"}
            iconColor2={"#fff"}
            iconBackground2={"red"}
            onClicked2={() => {
              alert("You have been added to the hospital waiting list.");
            }}

        
          />

<CardSeven
            title={"Herrick Hospital"}
            subTitle={"842 Basil Ave, Berkeley"}
            image={{
              uri:
                "https://s3-media0.fl.yelpcdn.com/bphoto/vEjCvDSA9zO843C2QgVPVQ/ls.jpg"
            }}
            icon1={"share"}
            iconColor1={"#fff"}
            iconBackground1={"#2f95dc"}
            onClicked1={() => {
              alert("Shared to your Whatsapp story!");
            }}
            icon2={"heart"}
            iconColor2={"#fff"}
            iconBackground2={"red"}
            onClicked2={() => {
              alert("You have been added to the hospital waiting list.");
            }}

        
          />
          

          

          
        </ScrollView>
        {/*this.state.people.map((item, i) => <Text key={i}>{item.name} </Text>)*/}
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});


























