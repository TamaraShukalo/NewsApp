import React, {useState} from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../constants/colors';
import {Control, Controller} from 'react-hook-form';
import {AddPostSchemaType} from '../../screens/CreatePost/CreatePost';
import {styles} from './styles';

interface Props extends TextInputProps {
  control: Control<AddPostSchemaType>;
  name: keyof AddPostSchemaType;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const ControlledInput = ({
  control,
  name,
  error,
  containerStyle,
  ...textInputProps
}: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange}}) => (
          <TextInput
            style={[
              styles.input,
              isFocused && styles.focusedInput,
              containerStyle,
            ]}
            value={value}
            onChangeText={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholderTextColor={COLORS.grey}
            multiline={true}
            {...textInputProps}
          />
        )}
      />
      <View style={styles.errorContainer}>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  );
};
