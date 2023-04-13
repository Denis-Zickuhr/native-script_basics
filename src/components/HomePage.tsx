import { RouteProp } from "@react-navigation/core";
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type Home = {
  route: RouteProp<MainStackParamList, "Home">;
  navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

export function Home({ navigation }: Home) {
  return (
    <flexboxLayout style={styles.container}>
      <stackLayout>
        <button
          style={styles.button}
          // @ts-ignore
          onTap={() =>
            navigation.navigate("About")
          }
        >
          Go to About
        </button>
        <button
          style={styles.button}
          // @ts-ignore
          onTap={() => navigation.navigate("Task")}
        >
          Go to Task
        </button>
      </stackLayout>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    textAlignment: "center",
    fontSize: 24,
    color: "black",
  },
  button: {
    fontSize: 24,
    color: "#2e6ddf",
  },
});
