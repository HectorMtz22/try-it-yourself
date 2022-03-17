import { View, Text, Button, TextInput } from "react-native";

export default function LoginForm() {
  function submit() {
    console.log("Enviado");
  }

  return (
    <View>
      <Text>Componente LoginForm</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Contraseña" />
      <Button title="Enviar" onPress={submit} />
    </View>
  );
}
