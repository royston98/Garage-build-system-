import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "setup") {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>VEHICLE & BUILD SETUP</Text>

          <Text style={styles.label}>Vehicle</Text>
          <View style={styles.card}>
            <Text style={styles.value}>2005 Holden Commodore</Text>
          </View>

          <Text style={styles.label}>Build Goal</Text>
          <View style={styles.card}>
            <Text style={styles.value}>Street / Show</Text>
          </View>

          <Text style={styles.label}>Budget</Text>
          <View style={styles.card}>
            <Text style={styles.value}>$15,000</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setScreen("home")}
          >
            <Text style={styles.buttonText}>SAVE & RETURN</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (screen === "money") {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>MONEY & EXPENSES</Text>

          <View style={styles.card}>
            <Text style={styles.small}>TOTAL BUDGET</Text>
            <Text style={styles.big}>$15,000</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.small}>SPENT</Text>
            <Text style={styles.big}>$1,200</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.small}>REMAINING</Text>
            <Text style={styles.big}>$13,800</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setScreen("home")}
          >
            <Text style={styles.buttonText}>BACK TO DASHBOARD</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (screen === "parts") {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>PARTS TRACKER</Text>

          <View style={styles.card}>
            <Text style={styles.value}>2 parts currently tracked</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.value}>Engine — Purchased</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.value}>Suspension — Planned</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setScreen("home")}
          >
            <Text style={styles.buttonText}>BACK TO DASHBOARD</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (screen === "planner") {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>BUILD PLANNER</Text>

          <View style={styles.card}>
            <Text style={styles.value}>☐ Strip & inspect vehicle</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.value}>☐ Suspension upgrade</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.value}>☐ Engine installation</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.value}>☐ Final tune & road test</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setScreen("home")}
          >
            <Text style={styles.buttonText}>BACK TO DASHBOARD</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.brand}>GARAGE BUILD SYSTEM™</Text>
        <Text style={styles.tagline}>PLAN • TRACK • BUILD • ACHIEVE</Text>

        <View style={styles.hero}>
          <Text style={styles.vehicle}>2005 HOLDEN COMMODORE</Text>
          <Text style={styles.goal}>STREET / SHOW</Text>

          <Text style={styles.progressText}>BUILD PROGRESS</Text>
          <Text style={styles.progress}>0%</Text>
          <Text style={styles.small}>0 OF 4 JOBS COMPLETE</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.stat}>
            <Text style={styles.small}>BUDGET</Text>
            <Text style={styles.statValue}>$15,000</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.small}>SPENT</Text>
            <Text style={styles.statValue}>$1,200</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.stat}>
            <Text style={styles.small}>REMAINING</Text>
            <Text style={styles.statValue}>$13,800</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.small}>PARTS</Text>
            <Text style={styles.statValue}>2</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen("setup")}
        >
          <Text style={styles.buttonText}>VEHICLE & BUILD SETUP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen("money")}
        >
          <Text style={styles.buttonText}>MONEY & EXPENSES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen("parts")}
        >
          <Text style={styles.buttonText}>PARTS TRACKER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen("planner")}
        >
          <Text style={styles.buttonText}>BUILD PLANNER</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  brand: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 15,
  },

  tagline: {
    color: "#ff6a00",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 20,
  },

  title: {
    color: "#ff6a00",
    fontSize: 23,
    fontWeight: "900",
    marginBottom: 20,
  },

  hero: {
    backgroundColor: "#1d1d1d",
    borderRadius: 14,
    padding: 22,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#333333",
  },

  vehicle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "900",
  },

  goal: {
    color: "#aaaaaa",
    marginTop: 5,
    marginBottom: 20,
  },

  progressText: {
    color: "#aaaaaa",
    fontSize: 12,
    fontWeight: "800",
  },

  progress: {
    color: "#ff6a00",
    fontSize: 42,
    fontWeight: "900",
  },

  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },

  stat: {
    flex: 1,
    backgroundColor: "#1d1d1d",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#333333",
  },

  statValue: {
    color: "#ffffff",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#1d1d1d",
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#333333",
  },

  label: {
    color: "#aaaaaa",
    fontWeight: "800",
    marginBottom: 7,
  },

  value: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
  },

  big: {
    color: "#ff6a00",
    fontSize: 30,
    fontWeight: "900",
    marginTop: 5,
  },

  small: {
    color: "#999999",
    fontSize: 11,
    fontWeight: "800",
  },

  button: {
    backgroundColor: "#ff6a00",
    padding: 17,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 14,
  },
});
