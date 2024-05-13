import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Title} from '../../components/Title/Title';
import {Header} from '../../components/Header/Header';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParamList} from '../../navigation/MainNavigation';
import {formattedDate} from '../../utils/formattedDate';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export const NewsPostScreen = () => {
  const {params} = useRoute<RouteProp<MainStackParamList, 'NewsPostScreen'>>();

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Title
          title={params.post.title}
          type={1}
          containerStyle={styles.header}
        />
      </Header>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: params.post.urlToImage}}
          style={styles.postImage}
          resizeMode={'cover'}
        />
        <View style={styles.articleContainer}>
          <Title
            type={3}
            title={formattedDate(params.post.publishedAt)}
            containerStyle={styles.publishedAtText}
          />
          <Text style={styles.contentText}>{params.post.content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
