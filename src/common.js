import { Alert, Platform } from "react-native";

const server = "http://192.168.0.105:3333";

function showError(err) {
  Alert.alert("Erro de conexão", `Erro: ${err}`);
}

function showSuccess(msg) {
  Alert.alert("Sucesso!", msg);
}

export { server, showError, showSuccess };
