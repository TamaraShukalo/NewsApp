import React, {useCallback, useState} from 'react';
import {TextInput, View} from 'react-native';
import {Search} from '../../assets/svg/Search';
import {debounce} from 'lodash';
import {styles} from './styles';

type Props = {
  onSearch: (val: string) => void | undefined;
  placeholder: string;
};

export const SearchInput = ({onSearch, placeholder}: Props) => {
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      onSearch?.(searchQuery);
    }, 1000),
    [],
  );

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    debouncedSearch(searchValue);
  };

  return (
    <View style={[styles.container, isFocused && styles.focusedInput]}>
      <Search />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={search}
        onChangeText={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};
