import React, { useState } from "react";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "../NavigationParamList";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { ListView } from "react-nativescript";
import { ItemEventData } from "@nativescript/core";

type Task = {
  name: string;
  description: string;
  done: boolean;
};

type TaskPageProps = {
  tasks: Task[];
  route: RouteProp<MainStackParamList, "Task">;
  navigation: FrameNavigationProp<MainStackParamList, "Task">;
};

const TaskPage = ({ navigation }: TaskPageProps) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      name: "Vir para UDESC",
      description: "Visitar fisicamente a UDESC",
      done: true,
    },
    {
      name: "Apresentar seminário de DDM",
      description: "Completar a apresentação do seminário de DDM",
      done: false,
    },
    {
      name: "Comprar Pão",
      description: "Pãozinho francês",
      done: false,
    },
  ]);

  const cellFactory = (task: Task) => {
    return (
      <stackLayout
        key={task.name}
        style={{
          padding: "10",
          marginBottom: "10",
          borderRadius: "5",
          backgroundColor: task.done ? "green" : "red",
        }}
      >
        <label style={styles.name}>{task.name}</label>
        <label style={styles.description}>{task.description}</label>
        <label style={styles.done}>
          {task.done ? "Completo" : "Incompleto"}
        </label>
      </stackLayout>
    );
  };

  const onItemTap = (args: ItemEventData) => {
    const index: number = args.index;
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <page>
      <flexboxLayout style={styles.container}>
        <stackLayout style={styles.taskList}>
          <ListView
            items={tasks}
            cellFactory={cellFactory}
            onItemTap={onItemTap}
          />
        </stackLayout>
        {/* @ts-ignore */}
        <button style={styles.button} onTap={() => navigation.navigate("Home")}>
          Página principal
        </button>
      </flexboxLayout>
    </page>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  taskList: {
    width: "100%",
    height: "85%",
    overflow: "scroll",
  },
  name: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  description: {
    marginTop: 5,
    marginBottom: 5,
    color: "#ffffff",
  },
  done: {
    color: "#ffffff",
  },
  button: {
    color: "red",
  },
});

export default TaskPage;
