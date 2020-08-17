import React, { Component } from "react";
import {
  Alert,
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";

import commonStyles from "../commonStyles";
import backgroundImage from "../../assets/imgs/login.jpg";

export default class Auth extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    stageNew: false,
  };

  signinOrsigup = () => {
    if (this.state.stageNew) Alert.alert("Sucesso", "Criar conta");
    else Alert.alert("Sucesso", "Logar");
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.background}>
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>
            {this.state.stageNew ? "Crie sua conta" : "Informe seus dados"}
          </Text>
          {this.state.stageNew && (
            <TextInput
              placeholder="Nome"
              style={styles.input}
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })}
            />
          )}
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            textContentType={"emailAddress"}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry={true}
          />
          {this.state.stageNew && (
            <TextInput
              placeholder="Confirme a senha"
              style={styles.input}
              value={this.state.confirmPassword}
              onChangeText={(confirmPassword) =>
                this.setState({ confirmPassword })
              }
              secureTextEntry={true}
            />
          )}
          <TouchableOpacity onPress={this.signinOrsigup}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {this.state.stageNew ? "Cadastrar" : "Entrar"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.newAcount}
          onPress={() => this.setState({ stageNew: !this.state.stageNew })}
        >
          <Text style={styles.buttonText}>
            {this.state.stageNew ? "Já possui conta?" : "Não possui conta?"}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 70,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    marginTop: 10,
    backgroundColor: "#FFF",
    padding: Platform.OS === "ios" ? 15 : 10,
  },
  formContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 20,
    width: "90%",
  },
  button: {
    backgroundColor: "#080",
    marginTop: 10,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: commonStyles.fontFamily,
    color: "#FFF",
    fontSize: 20,
  },
  newAcount: {
    padding: 10,
  },
});
