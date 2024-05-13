import React from 'react';
import {View} from 'react-native';
import {Button} from '../../components/Button/Button';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainNavigation';
import {COLORS} from '../../constants/colors';
import {Line} from '../../assets/svg/Line';
import {usePostsState} from '../../store/allPosts';
import {styles} from './styles';

export const ModalScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const {params} = useRoute<RouteProp<MainStackParamList, 'Modal'>>();

  const {deletePost} = usePostsState();

  const handleDeletePost = async (postId: string) => {
    await deletePost(postId);
    navigation.goBack();
  };

  return (
    <View style={styles.modal}>
      <Line style={styles.line} />
      <View style={styles.buttons}>
        <Button
          title={'Delete'}
          onPress={() => handleDeletePost(params?.id)}
          containerStyle={{backgroundColor: COLORS.coral}}
        />
        <Button
          title={'Close'}
          onPress={() => navigation.goBack()}
          containerStyle={{backgroundColor: COLORS.blue}}
        />
      </View>
    </View>
  );
};
