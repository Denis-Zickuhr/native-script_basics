import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { Home } from "./HomePage";
import TaskPage from "./TaskPage";
import AboutPage from './AboutPage';

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                },
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={Home}
            />
            <StackNavigator.Screen
                name="About"
                component={AboutPage}
            />
            <StackNavigator.Screen
                name="Task"
                component={TaskPage}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
