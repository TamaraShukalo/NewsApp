import {KeyboardTypeOptions} from 'react-native';
import {AddPostSchemaType} from '../screens/CreatePost/CreatePost';
import {styles} from '../screens/CreatePost/styles';

type InputField = {
  name: keyof AddPostSchemaType;
  placeholder: string;
  error?: keyof AddPostSchemaType;
  keyboardType?: KeyboardTypeOptions;
  containerStyle?: object;
};

export const inputFields: InputField[] = [
  {
    name: 'title',
    placeholder: 'Title*',
    error: 'title',
  },
  {
    name: 'urlToImage',
    placeholder: 'Image url',
    keyboardType: 'url',
  },
  {
    name: 'link',
    placeholder: 'Link',
    keyboardType: 'url',
  },
  {
    name: 'content',
    placeholder: 'Type your message here*',
    error: 'content',
    containerStyle: styles.messageInput,
  },
];
