import React from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

export const SelectValue= ({selectGroup, setSelectGroup}) => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
console.log(selectGroup);
  const setSelected = (index) => {
    setSelectedIndex(index);
    setSelectGroup(selectGroup[index]);
  }
  return (
    <Layout style={styles.container} level='1'>
      <Select
        selectedIndex={selectedIndex}
        onSelect={index => setSelected(index)}>
          {selectGroup.map((group, index) => (
            <SelectItem title={group[name_en || name]} />
            ))}
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});