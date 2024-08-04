import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBlockColor: `#cccccc`,
  },

  textInput: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },

  button: {
    width: "100",
    marginHorizontal: 8,
  },
});
