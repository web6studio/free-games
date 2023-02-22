import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dropdown from './Dropdown';
import { Colors, Fonts } from '../styles';
import { PLATFORM_OPTIONS, CATEGORY_OPTIONS, SORT_OPTIONS } from '../constants';

type Props = {
  onPlatformChange: (platform: string) => void;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
  platform: string;
  category: string;
  sort: string;
};

const FilterHeader: FunctionComponent<Props> = ({
  onPlatformChange,
  onCategoryChange,
  onSortChange,
  platform,
  category,
  sort,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Free-To-Play Games</Text>
    <View style={styles.filters}>
      <View style={styles.filter}>
        <Text style={styles.label}>Platform: </Text>
        <Dropdown
          value={platform}
          items={PLATFORM_OPTIONS}
          onChange={onPlatformChange}
        />
      </View>
      <View style={styles.filter}>
        <Text style={styles.label}>Genre/Tag: </Text>
        <Dropdown
          value={category}
          items={CATEGORY_OPTIONS}
          onChange={onCategoryChange}
        />
      </View>
      <View style={styles.filter}>
        <Text style={styles.label}>Sort by: </Text>
        <Dropdown value={sort} items={SORT_OPTIONS} onChange={onSortChange} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.background,
    borderBottomColor: '#1c1c1c99',
    borderBottomWidth: 1,
    shadowColor: '#000000',
    elevation: 3,
  },
  title: {
    color: Colors.heading,
    fontSize: 32,
    fontWeight: '500',
    paddingBottom: 10,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filter: {
    flexBasis: '50%',
    flexDirection: 'row',
  },
  label: {
    lineHeight: 30,
    ...Fonts.text,
  },
});

export default FilterHeader;
