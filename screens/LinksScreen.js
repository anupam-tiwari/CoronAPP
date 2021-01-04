import React, {useState, Component } from 'react';
import { StyleSheet,TouchableOpacity, View , Text} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Dialog from "react-native-dialog";



export default function LinksScreen(){

  const [dialogVisible, setdialogVisible] = useState(false);

  
  
  const showDialog = () => {
    setdialogVisible( true );
  };

  const handleCancel = () => {
    setdialogVisible( false );
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setdialogVisible( false );
  };

  
    return (
      <View>
        <TouchableOpacity onPress={showDialog}>
          <Text>Show Dialog</Text>
        </TouchableOpacity>
        <Dialog.Container visible={true}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Input label="hhoi" />
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Delete" onPress={handleDelete} />
        </Dialog.Container>
      </View>
    );
  }
