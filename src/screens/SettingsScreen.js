import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import globalStyles from "./globalStyles";

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={globalStyles(insets).container}>
      <Text>SettingsScreen</Text>
    </View>
  );
}
