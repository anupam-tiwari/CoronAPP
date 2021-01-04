/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState ,Component } from "react";
import Dialog from "react-native-dialog";
import {
  Platform,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
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

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default function market(){

 
  
    return (
      <SafeAreaView style={styles.container}>


        
    
        

<Text style={{fontWeight:"bold", fontSize:40}}>Around you</Text>
        <ScrollView>
          

          <CardFour
            onClicked={() => {
              alert("Opening times (revised): 7AM to 7PM, There is no BREAD and no FLOUR left as of 7:10PM");
            }}
            image={{
              uri:"https://www.kiplinger.com/slideshow/spending/T050-S001-15-secrets-to-shopping-at-trader-joe-s/images/intro.jpg"
            }}
            date={"28 March 2020"}
            location={"Trader Joe's at Hearst Avenue"}
            off={"12 items Restocked"}
            offText={
              "On 28th March, 2020, we stocked up a total of 12 items. All these items were from the dairy products section."
            }
           // buttonText={"Visit"}
           // buttonColor={"#ff2788"}
          />

<CardFour
            onClicked={() => {
              alert("Opening times (revised): 7AM to 5PM, There is no FLOUR and no MILK left as of 3:10PM");
            }}
            image={{
              uri:"https://pbs.twimg.com/media/ETkIkCVXkAIA_Ew.jpg"
            }}
            date={"28 March 2020"}
            location={"Target at University Avenue"}
            off={"4 items Restocked"}
            offText={
              "On 28th March, 2020, we stocked up a total of 4 items. Three of these items were from the dairy products section, while one of them was from the perishables."
            }
           // buttonText={"Visit"}
           // buttonColor={"#ff2788"}
          />

<CardFour
            onClicked={() => {
              alert("Opening times (revised): 7AM to 4PM, There is no FRUIT left as of 4:10PM");
            }}
            image={{
              uri:"data:image/jpeg;base64,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"
            }}
            date={"28 March 2020"}
            location={"Walgreens at Shattuck Avenue"}
            off={"8 items Restocked"}
            offText={
              "On 28th March, 2020, we stocked up a total of 8 items. Three of these items were from the dairy products section, while one of them was from the perishables and the rest were vegetables."
            }
           // buttonText={"Visit"}
           // buttonColor={"#ff2788"}
          />


<CardFour
            onClicked={() => {
              alert("Opening times (revised): 7AM to 6PM, There is no MILK left as of 5:10PM");
            }}
            image={{
              uri:"https://cdn.aarp.net/content/dam/aarp/health/drugs_supplements/2019/11/1140-dollar-tree.jpg"
            }}
            date={"28 March 2020"}
            location={"Dollar Tree on Shattuck Avenue"}
            off={"2 items Restocked"}
            offText={
              "On 28th March, 2020, we stocked up a total of 2 items. Both of these products were in the fruit and vegetables section."
            }
           // buttonText={"Visit"}
           // buttonColor={"#ff2788"}
          />



      
    

          
        </ScrollView>
        
          <ActionButton buttonColor="#2f95dc">
          <ActionButton.Item buttonColor='#9b59b6' title="Add Info" onPress={() => {alert(" Add items")}}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>


       
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});


























