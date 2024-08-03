import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // declaring useState for state management
  // enteredGoalText - Hold the state 
  // setEnteredGoalText - Function to populate the state
  const [enteredGoalText, setEnteredGoalText] = useState('')

  // function to manage state
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }

  // perform some actions on the state
  function addGoalHandler(){
   console.log(enteredGoalText);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}> 
        <TextInput style={styles.textInput} placeholder="Your course goal" onChangeText={goalInputHandler}/>
        <Button  title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text >List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  appContainer:{
    flex: 1,
    paddingTop:50,
    paddingHorizontal: 16
  },

  inputContainer:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:24,
    borderBottomWidth: 1,
    borderBlockColor: `#cccccc`
  },

  textInput:{
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:8,
    padding:8 
  },
  goalsContainer:{
    flex:5
  }
});
