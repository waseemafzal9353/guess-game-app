import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://images.app.goo.gl/qw1eod99TNsca6dNA" }}
          //  source={require('../assets/success.png')}
          style={styles.image}
        />
      </View>
     <View style={styles.resultContainer}>
     <BodyText style={styles.resultText}>
        Your phone needed <Text style={styles.higlight}>{props.roundsNumber}</Text> rounds to guess the number{" "}
        <Text>{props.userNumber}</Text>
      </BodyText>
     </View>
      <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "80%",
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "1000%",
    height: "100%",
  },
  resultContainer: {
marginHorizontal: 30,
marginVertical: 15
  },
  resultText: {
textAlign: 'center',
fontSize: 20
  },
  higlight: {
color: Colors.primary,
fontFamily: 'roboto-bold'
  }
});

export default GameOverScreen;
