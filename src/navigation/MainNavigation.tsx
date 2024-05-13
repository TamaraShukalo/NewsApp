import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewsPostScreen} from '../screens/NewsPostScreen/NewsPostScreen';
import {CreatePost} from '../screens/CreatePost/CreatePost';
import {ModalScreen} from '../screens/ModalScreen/ModalScreen';
import {Post} from '../store/allPosts';
import {COLORS} from '../constants/colors';
import {Home} from '../screens/Home/Home';

export type MainStackParamList = {
  Home: undefined;
  NewsPostScreen: {post: Post};
  CreatePost: undefined;
  Modal: {id: string};
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'NewsPostScreen'} component={NewsPostScreen} />
        <Stack.Screen name={'CreatePost'} component={CreatePost} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          contentStyle: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: COLORS.modalBackground,
          },
        }}>
        <Stack.Screen name={'Modal'} component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
