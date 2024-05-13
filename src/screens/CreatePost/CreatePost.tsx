import React from 'react';
import {View} from 'react-native';
import {Title} from '../../components/Title/Title';
import {Button} from '../../components/Button/Button';
import {Header} from '../../components/Header/Header';
import {z} from 'zod';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';
import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainNavigation';
import {ControlledInput} from '../../components/ControlledInput/ControlledInput';
import {Post, usePostsState} from '../../store/allPosts';
import {DateTime} from 'luxon';
import {styles} from './styles';
import {DEFAULT_IMG_URL} from '../../constants/images';
import {SafeAreaView} from 'react-native-safe-area-context';
import {inputFields} from '../../data/inputFields';

const AddPostSchema = z.object({
  title: z.string().min(10, 'Title must be at least 10 characters long'),
  urlToImage: z.string().optional(),
  link: z.string().optional(),
  content: z.string().min(10, 'Message must be at least 10 characters long'),
});

export type AddPostSchemaType = z.infer<typeof AddPostSchema>;

export const CreatePost = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<AddPostSchemaType>({
    resolver: zodResolver(AddPostSchema),
    mode: 'onChange',
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const {addPost} = usePostsState();

  const onSubmit: SubmitHandler<AddPostSchemaType> = async data => {
    const {title, urlToImage, link, content} = data;

    const newPost: Post = {
      id: '',
      title,
      urlToImage: urlToImage || DEFAULT_IMG_URL,
      link: link || null,
      publishedAt: DateTime.now().toISO(),
      content,
    };

    await addPost(newPost);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header containerStyle={styles.header}>
        <Title
          title={'New post'}
          type={1}
          containerStyle={styles.headerTitle}
        />
      </Header>
      <KeyboardAwareScrollView
        bottomOffset={30}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.form}>
        <View style={styles.inputs}>
          {inputFields.map((field, index) => (
            <ControlledInput
              key={index}
              control={control}
              name={field.name}
              placeholder={field.placeholder}
              error={field.error ? errors[field.error]?.message : undefined}
              keyboardType={field.keyboardType}
              containerStyle={field.containerStyle}
            />
          ))}
        </View>
        <Button
          title={'Public'}
          onPress={handleSubmit(onSubmit)}
          containerStyle={styles.button}
          isDisabled={!isValid}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
