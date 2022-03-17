import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import globalStyles from "./globalStyles";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={globalStyles(insets).container}>
      <Text>Home Screen</Text>
    </View>
  );
}
