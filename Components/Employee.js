import React from 'react';
import type {Node} from 'react';
import {Text, useColorScheme, View} from 'react-native';

const Employees: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{display: 'flex', alignItems: 'center', padding: 20}}>
      <Text>Name : Animesh</Text>
      <Text>Profile: Developer</Text>
    </View>
  );
};

export default Employees;
