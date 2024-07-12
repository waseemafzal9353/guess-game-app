import { AppLoaded } from "expo";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from 'expo-font';


const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'robot-bold': require('./assets/fonts/Roboto-Bold.tff')
  })
}
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(!fontsLoaded) {
    return <AppLoaded startAsync={fetchFonts} onFinish={()=> setFontsLoaded(true)} onError={(err) => console.log(err)}/>
  }
  const startGameHandler = (startGameNumber) => {
    setUserNumber(startGameNumber);
    setGuessRounds(0);
  };

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  const gameOverHandler = (noOfRounds) => {
    setGuessRounds(noOfRounds);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
