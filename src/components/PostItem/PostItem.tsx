import React, {useCallback} from 'react';
import {Post} from '../../store/allPosts';
import {Image, Pressable, View} from 'react-native';
import {Title} from '../Title/Title';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainNavigation';
import {formattedDate} from '../../utils/formattedDate';
import {styles} from './styles';

export const PostItem = ({post}: {post: Post}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handleOnPostPress = useCallback(() => {
    navigation.navigate('NewsPostScreen', {post});
  }, [navigation, post]);

  return (
    <Pressable
      style={styles.container}
      onPress={handleOnPostPress}
      onLongPress={() => navigation.navigate('Modal', {id: post.id})}>
      <View style={styles.innerContainer}>
        <Image
          source={{uri: post.urlToImage}}
          style={styles.postImage}
          resizeMode={'cover'}
        />
        <View style={styles.textContainer}>
          <Title
            type={1}
            title={post.title}
            numberOfLines={1}
            containerStyle={styles.textHeader}
          />
          <Title type={2} title={post.content} numberOfLines={1} />
          <Title type={3} title={formattedDate(post.publishedAt)} />
        </View>
      </View>
    </Pressable>
  );
};
