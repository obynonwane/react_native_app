import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  // declaring useState for state management
  // enteredGoalText - Hold the state 
  // setEnteredGoalText - Function to populate the state
  const [enteredGoalText, setEnteredGoalText] = useState('') // just a string 
  const [courseGoals, setCourseGoals] = useState([]) // array of strings state - set to empty 

  // function to manage state
  function goalInputHandler(enteredText){
    // update the state
    setEnteredGoalText(enteredText);
    
  }
  // perform some actions on the state
  function addGoalHandler(){
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text:enteredGoalText, id:Math.random().toString()} ])
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}> 
        <TextInput style={styles.textInput} placeholder="Your course goal" onChangeText={goalInputHandler}/>
        <Button  title="Add Goal" onPress={addGoalHandler}/>
      </View>
     <View style={styles.goalsContainer}>
     <FlatList  data={courseGoals} renderItem={itemData => {
      itemData.index
      return (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
          </View>
      )
     }}
     keyExtractor={(item, index)=>{
      return item.id;
     }}
     />
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
  },
  goalItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText:{
    color:'white'
  }
});
