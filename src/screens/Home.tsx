import React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeScreenProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="to about" onPress={() => navigation.navigate('About')} />
    </View>
  );
};

export default Home;
