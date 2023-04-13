import * as utils from "@nativescript/core/utils";
import React from "react";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "../NavigationParamList";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { ListView } from "react-nativescript";
import { ItemEventData } from "@nativescript/core";

type ContactInfo = {
  name: string;
  phone: string;
  email: string;
  url: string;
};

type AboutPageProps = {
  contacts: ContactInfo[];
  route: RouteProp<MainStackParamList, "About">;
  navigation: FrameNavigationProp<MainStackParamList, "About">;
};

const AboutPage = ({ navigation }: AboutPageProps) => {
  const contacts = [
    {
      name: "Denis Zickuhr",
      phone: "47992456612",
      email: "denis.zickuhr16@edu.udesc",
      url: "",
    },
    {
      name: "Lucas Martendal",
      phone: "47999120099",
      email: "lucas.martendal@edu.udesc",
      url: "",
    },
    {
      name: "Github",
      phone: "---",
      email: "native-script_basics",
      url: "https://github.com/Denis-Zickuhr/native-script_basics",
    },
  ];

  const cellFactory = (contact: ContactInfo) => {
    return (
      <stackLayout key={contact.name} style={styles.contact}>
        <label style={styles.name}>{contact.name}</label>
        <label style={styles.phone}>{contact.phone}</label>
        <label style={styles.email}>{contact.email}</label>
      </stackLayout>
    );
  };

  const onItemTap = (args: ItemEventData) => {
    const index: number = args.index;
    const item: ContactInfo = contacts[index];
    utils.openUrl(item.url);
  };

  return (
    <page>
      <flexboxLayout style={styles.container}>
        <stackLayout style={styles.contactList}>
          <ListView
            items={contacts}
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
  contactList: {
    width: "100%",
    height: "85%",
    overflow: "scroll",
  },
  contact: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#eee",
  },
  name: {
    fontWeight: "bold",
  },
  phone: {
    marginTop: 5,
    marginBottom: 5,
  },
  email: {
    color: "#007aff",
  },
  button: {
    color: "red",
  },
});

export default AboutPage;
