import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{ height: 100, backgroundColor: "red" }}>
          <Text>Header</Text>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: 40,
              height: 40,
              left: 20,
              backgroundColor: "yellow"
            }}
          >
            <Text>logo</Text>
          </View>
        </View>

        <ScrollView>
          <View style={{ height: 1000 }}>
            <Text style={{ padding: 100 }}>Scroll container</Text>
            <Text style={{ padding: 100 }}>Scroll container</Text>
            <Text style={{ padding: 100 }}>Scroll container</Text>
            <Text style={{ padding: 100 }}>Scroll container</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
