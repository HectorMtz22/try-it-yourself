import { StyleSheet } from "react-native";

const styles = (props) =>
  StyleSheet.create({
    container: {
      paddingTop: props.top,
      paddingBottom: props.bottom,
      paddingHorizontal: 16,
      flex: 1,
    },
  });

export default styles;
