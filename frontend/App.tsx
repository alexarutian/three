import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "./utilities/stylevars";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

let today = new Date();

const CalendarPage = () => {
  return (
    <>
      <Text>We are on the calendar page</Text>
    </>
  );
};

const SometimePage = () => {
  return (
    <>
      <Text>SOMETIME PAGE</Text>
    </>
  );
};

const LogsPage = () => {
  return (
    <>
      <Text>LOGS PAGE</Text>
    </>
  );
};

const SettingsPage = () => {
  return (
    <>
      <Text>Here are the settings</Text>
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <View style={styles.thingRow}>
        <Text style={styles.thingText}>1. My first goal</Text>
      </View>
      <View style={styles.thingRow}>
        <Text style={styles.thingText}>2. My second goal</Text>
      </View>
      <View style={styles.thingRow}>
        <Text style={styles.thingText}>3. Yet another goal</Text>
      </View>
    </>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: colors.offWhite,
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 75,
      }}
    >
      <Text
        style={{ fontSize: 42, textAlign: "center", color: colors.racingGreen }}
      >
        THREE
      </Text>
      <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 20 }}>
        {today.toDateString()}
      </Text>
      <View style={styles.threeThings}>
        {currentPage == "home" && <HomePage />}
        {currentPage == "calendar" && <CalendarPage />}
        {currentPage == "sometime" && <SometimePage />}
        {currentPage == "logs" && <LogsPage />}
        {currentPage == "settings" && <SettingsPage />}
      </View>
      <View style={styles.iconRow}>
        <Pressable
          onPress={() => {
            setCurrentPage("calendar");
          }}
          style={styles.footerButton}
        >
          <MaterialCommunityIcons
            name="calendar-month"
            size={24}
            color="black"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setCurrentPage("sometime");
          }}
          style={styles.footerButton}
        >
          <MaterialCommunityIcons
            name="calendar-arrow-right"
            size={24}
            color="black"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setCurrentPage("home");
          }}
          style={styles.footerButton}
        >
          <FontAwesome name="home" size={34} color="black" />
        </Pressable>
        <Pressable
          onPress={() => {
            setCurrentPage("logs");
          }}
          style={styles.footerButton}
        >
          <FontAwesome name="list" size={20} color="black" />
        </Pressable>
        <Pressable
          onPress={() => {
            setCurrentPage("settings");
          }}
          style={styles.footerButton}
        >
          <Ionicons name="settings-outline" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: 100,
    borderColor: colors.nightBlack,
    paddingBottom: 40,
  },
  threeThings: {
    width: "95%",
    borderColor: colors.cambridgeBlue,
    borderWidth: 1,
    flexGrow: 1,
    borderRadius: 10,
    padding: 10,
  },
  thingRow: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  thingText: { fontSize: 24 },
  footerButton: {
    width: "20%",
    alignItems: "center",
  },
});
