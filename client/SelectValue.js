import React from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

export const SelectValue= ({selectGroup, setSelectGroup}) => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const setSelected = (index) => {
    setSelectedIndex(index);
    setSelectGroup(selectGroup[index.row]);
  }
  return (
    <Layout style={styles.container} level='1'>
      <Select
        selectedIndex={selectedIndex}
        value={selectGroup[selectedIndex.row] ? (selectGroup[selectedIndex.row].name_en || selectGroup[selectedIndex.row].name) : 'No Exercises Available'}
        onSelect={index => setSelected(index)}>
          {selectGroup.map((group) => (
            <SelectItem title={group.name_en || group.name} key={group.id}/>
            ))}
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
    minWidth: 400
  },
});