import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles(insets).container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = (insets) =>
  StyleSheet.create({
    container: {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingHorizontal: 16,
      flex: 1,
    },
  });
