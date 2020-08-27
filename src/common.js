import { Alert } from "react-native";

const server = "http://192.168.0.105:3333";

function showError(err) {
  if (err.response && err.response.data)
    Alert.alert("Ocorreu um problema!", `Erro: ${err.response.data}`);
  else Alert.alert("Ocorreu um problema...");
}

function showSuccess(msg) {
  Alert.alert("Sucesso!", msg);
}

export { server, showError, showSuccess };
