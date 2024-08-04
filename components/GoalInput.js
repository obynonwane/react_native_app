import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

function GoalInput(props) {
  // enteredGoalText - Hold the state
  // setEnteredGoalText - Function to populate the state
  const [enteredGoalText, setEnteredGoalText] = useState(""); // just a string
  // function to manage state
  function goalInputHandler(enteredText) {
    // update the state
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    //passing item to the parent component while executing afunction from the
    // parent component
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBlockColor: `#cccccc`,
  },

  textInput: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
