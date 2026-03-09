import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Scan Area */}
      <View style={styles.scanContainer}>

        <Image
          source={require("../assets/Orange-Juice-Bottle-Mockup-removebg-preview.png")}
          style={styles.scanImage}
        />

        {/* Scan Frame */}
        <View style={styles.scanFrame} />

      </View>


      {/* Product Card */}
      <View style={styles.card}>

        <Image
          source={require("../assets/Orange-Juice-Bottle-Mockup-removebg-preview.png")}
          style={styles.cardImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.brand}>Lauren’s</Text>
          <Text style={styles.name}>Orange Juice</Text>
        </View>

        <View style={styles.iconBox}>
          <Ionicons name="grid-outline" size={24} color="#FFD54F" />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#E8E1D6",
    justifyContent: "space-between",
    paddingVertical: 40
  },

  scanContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  scanImage: {
    width: 580,
    height: 600,
    resizeMode: "contain"
  },

  scanFrame: {
    position: "absolute",
    width: 280,
    height: 420,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    borderRadius: 40
  },

  card: {
    width: "90%",
    height: 90,
    backgroundColor: "#F4F4F4",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    alignSelf: "center"
  },

  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
    resizeMode: "contain"
  },

  textContainer: {
    flex: 1,
    marginLeft: 15
  },

  brand: {
    fontSize: 16,
    color: "#9E9E9E"
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333"
  },

  iconBox: {
    width: 55,
    height: 55,
    backgroundColor: "#5865F2",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  }

});