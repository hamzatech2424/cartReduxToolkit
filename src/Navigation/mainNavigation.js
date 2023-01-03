import React, { createRef, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../Screens/homeScreen';
import CartScreen from '../Screens/cartScreen';

const Stack = createStackNavigator();

export const navigationRef = createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function nestedNavigation(stackName, screenName, params) {
  navigationRef.current?.navigate(stackName, {
    screen: screenName,
    params: params,
  });
}

export function clearAndNavigate(name, params) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name }],
    params: params,
  });
}

export function goBack() {
  navigationRef.current?.goBack();
}

const MainNavigation = () => {

  return (
    <NavigationContainer
      ref={navigationRef}
    >

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            gestureEnabled: true,
            animation: 'slide_from_right',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

         <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: false,
            gestureEnabled: true,
            animation: 'slide_from_right',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;