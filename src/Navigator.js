import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Auth from "./screens/Auth";
import TaskList from "./screens/TaskList";

const menuRoutes = {
  Today: {
    name: "Today",
    screen: (props) => <TaskList title="Hoje" daysAhead={0} {...props} />,
    navigationOptions: {
      title: "Hoje",
    },
  },
  Tomorrow: {
    name: "Tomorrow",
    screen: (props) => <TaskList title="Amanhã" daysAhead={1} {...props} />,
    navigationOptions: {
      title: "Amanhã",
    },
  },
  Week: {
    name: "Week",
    screen: (props) => <TaskList title="Semana" daysAhead={7} {...props} />,
    navigationOptions: {
      title: "Semana",
    },
  },
  Month: {
    name: "Month",
    screen: (props) => <TaskList title="Mes" daysAhead={30} {...props} />,
    navigationOptions: {
      title: "Mes",
    },
  },
};

const Today = (props) => <TaskList title="Hoje" daysAhead={0} {...props} />;
const Tomorrow = (props) => (
  <TaskList title="Amanhã" daysAhead={1} {...props} />
);
const Week = (props) => <TaskList title="Semana" daysAhead={7} {...props} />;
const Month = (props) => <TaskList title="Mes" daysAhead={30} {...props} />;

const Drawer = createDrawerNavigator();
function drawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Today"
        component={Today}
        options={{ title: "Hoje" }}
      />
      <Drawer.Screen
        name="Tomorrow"
        component={Tomorrow}
        options={{ title: "Amanhã" }}
      />
      <Drawer.Screen
        name="Week"
        component={Week}
        options={{ title: "Semana" }}
      />
      <Drawer.Screen
        name="Month"
        component={Month}
        options={{ title: "Mes" }}
      />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={drawerNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);
