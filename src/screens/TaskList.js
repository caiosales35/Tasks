import React, { Component } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";

import Task from "../components/Task";
import AddTask from "./AddTask";
import commonStyles from "../commonStyles";
import todayImage from "../../assets/imgs/today.jpg";
import moment from "moment";
import "moment/locale/pt-br";

export default class TaskList extends Component {
  state = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: {},
    tasks: [
      {
        id: Math.random(),
        desc: "Comprar Livro",
        estimateAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: "Ler livro",
        estimateAt: new Date(),
        doneAt: null,
      },
    ],
  };

  componentDidMount = () => {
    this.filterTasks();
  };

  filterTasks = () => {
    let visibleTasks = null;
    if (this.state.showDoneTasks) visibleTasks = [...this.state.tasks];
    else {
      const pending = (task) => task.doneAt === null;
      visibleTasks = this.state.tasks.filter(pending);
    }
    this.setState({ visibleTasks });
  };

  toggleFilter = () => {
    this.setState(
      { showDoneTasks: !this.state.showDoneTasks },
      this.filterTasks
    );
  };

  toggleTask = (taskId) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === taskId) task.doneAt = task.doneAt ? null : new Date();
    });
    this.setState({ tasks }, this.filterTasks);
  };

  render() {
    const today = moment().locale("pt-br").format("ddd, D [de] MMMM");
    return (
      <SafeAreaView style={styles.container}>
        <AddTask
          isVisible={this.state.showAddTask}
          onCancel={() => this.setState({ showAddTask: false })}
        />
        <ImageBackground style={styles.background} source={todayImage}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon
                name={this.state.showDoneTasks ? "eye" : "eye-slash"}
                size={20}
                color={commonStyles.colors.secondary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <Task toggleTask={this.toggleTask} {...item} />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  taskList: {
    flex: 7,
  },
  titleBar: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  iconBar: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "flex-end",
    marginTop: Platform.OS === "ios" ? 40 : 30,
  },
});
