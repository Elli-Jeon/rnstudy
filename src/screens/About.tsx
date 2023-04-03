import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'>;

const About = ({navigation}: AboutScreenProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>About</Text>
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default About;
