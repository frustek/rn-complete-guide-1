import React from "react";

const GoalInput = props => {
    return(
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
    );
};

const styles = StyleSheet.create({
    input: {
        width: "80%",
        borderBottomColor: "black",
        borderBottomWidth: 2,
        padding: 10,
      },
});

export default GoalInput;