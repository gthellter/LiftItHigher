import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from './theme.json';
import { default as mapping } from './mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, TopNavigation, TopNavigationAction, ApplicationProvider, IconRegistry, Layout, Text, Button } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);,

export const WorkoutScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='WorkoutApp' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Put Workout Details here</Text>
      </Layout>
    </SafeAreaView>
  );
};