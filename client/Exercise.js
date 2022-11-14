import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../theme.json';
import { default as mapping } from '../mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView, View } from 'react-native';
import { Divider, Icon, TopNavigation, TopNavigationAction, ApplicationProvider, IconRegistry, Layout, Text, Button } from '@ui-kitten/components';

export const Exercise = ({exercise}) => {


  return (
    <View>
      <Text>{exercise.name}</Text>
    </View>
  )
}