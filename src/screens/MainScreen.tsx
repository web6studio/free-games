import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Colors } from '../styles';
import { buildFilterQueryParams } from '../utils';
import { CARD_HEIGHT } from '../constants';
import Header from '../components/Header';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import useGames from '../hooks/useGames';

const MainScreen = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const [platform, setPlatform] = useState('all');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');

  const { data, isLoading, isSuccess } = useGames(
    buildFilterQueryParams({ platform, category, sort }),
  );

  const renderItem = useCallback(
    ({ item }: { item: Item }) => {
      const navigate = () =>
        navigation.navigate('GameScreen', { id: item.id, title: item.title });
      return <Card item={item} onClick={navigate} />;
    },
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <View style={styles.container}>
      <Header
        category={category}
        platform={platform}
        sort={sort}
        onPlatformChange={setPlatform}
        onCategoryChange={setCategory}
        onSortChange={setSort}
      />
      {isSuccess && (
        <FlatList
          data={data}
          renderItem={renderItem}
          style={styles.list}
          keyExtractor={item => item.id}
          // optimization: https://reactnative.dev/docs/optimizing-flatlist-configuration
          maxToRenderPerBatch={20}
          initialNumToRender={20}
          windowSize={41}
          getItemLayout={(_, index) => ({
            length: CARD_HEIGHT,
            offset: CARD_HEIGHT * index,
            index,
          })}
        />
      )}
      {isLoading && <Spinner />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  list: {
    paddingVertical: 5,
  },
});

export default MainScreen;
