import { StyleSheet } from "react-native";

// coolor themes
const engineeringOrange = "#BA2D0B";
const honeydewGreen = "#D5F2E3";
const cambridgeBlue = "#73BA9B";
const racingGreen = "#003E1F";
const nightBlack = "#01110A";
const wolfGray = "#D6D6D6";
const offWhite = "#FCF6EE";

export const colors = {
  engineeringOrange,
  honeydewGreen,
  cambridgeBlue,
  racingGreen,
  nightBlack,
  wolfGray,
  offWhite,
};

export const leftFlexColumn = {
  flexDirection: "column",
  justifyContent: "flex-start",
};

export const universalStyles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
  },
  centeredScrollView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
