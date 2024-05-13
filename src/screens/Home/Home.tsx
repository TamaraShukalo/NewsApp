import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {Post, usePostsState} from '../../store/allPosts';
import {BigLoop} from '../../assets/svg/BigLoop';
import {PostItem} from '../../components/PostItem/PostItem';
import {SearchHeader} from '../../components/SearchHeader/SearchHeader';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Home = () => {
  const {allPosts, getAllPosts, isLoading} = usePostsState();
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await getAllPosts();
    setRefreshing(false);
  }, [getAllPosts]);

  const renderEmptyList = useCallback(() => {
    return (
      <View style={styles.emptyListContainer}>
        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <>
            <BigLoop />
            <Text style={styles.emptyListText}>No results found</Text>
          </>
        )}
      </View>
    );
  }, [isLoading]);

  const renderItem = useCallback(({item}: {item: Post}) => {
    return <PostItem post={item} />;
  }, []);

  const filteredPosts = useMemo(() => {
    const preparedQuery = searchQuery.trim().toLowerCase();
    return allPosts.filter(
      post =>
        post.title.toLowerCase().includes(preparedQuery) ||
        post.content.toLowerCase().includes(preparedQuery),
    );
  }, [allPosts, searchQuery]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader onSearch={handleSearch} />
      <FlatList
        contentContainerStyle={styles.listContent}
        data={filteredPosts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyList}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        maxToRenderPerBatch={4}
      />
    </SafeAreaView>
  );
};
