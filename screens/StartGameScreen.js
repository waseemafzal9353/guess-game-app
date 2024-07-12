import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredInput(inputText.replace(/[^0-9]/g, ""));
  };

  const inputResetHandler = () => {
    setEnteredInput("");
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredInput);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Chosen number should be between 1 and 99', [{
        text: 'okay', style: 'destructive', onPress: {inputResetHandler}
      }])
      return};
    setConfirmed(true);
    setSelectedNumber(enteredInput);
    setEnteredInput('')
    Keyboard.dismiss()
  }
  let confirmedNumber;

  if(confirmed) {
    confirmedNumber = (
      <View style={styles.summaryContainer}>
        <Text>You selected</Text>
       <NumberContainer>{selectedNumber}</NumberContainer>
       <MainButton  onPress={() => props.onStartGame(selectedNumber)}>
        START GAME
       </MainButton>
      </View>
    )
  }
  return (
  <TouchableWithoutFeedback onPress={()=>{
    Keyboard.dismiss()
  }}>
      <View style={styles.screen}>
      <Text style={styles.title}>Start Game</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.text}>Select a Number</Text>
        <Input
          style={styles.input}
          keyboardType="number-pad"
          maxLength={2}
          blurOnSubmit
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={inputResetHandler} color={Colors.accent} />
          </View>
          <View>
            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
          </View>
        </View>
      </Card>
      {confirmedNumber}
    </View>
  </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'roboto-bold'
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  text: {
    fontFamily: 'roboto-regular'
  }
});

export default StartGameScreen;
