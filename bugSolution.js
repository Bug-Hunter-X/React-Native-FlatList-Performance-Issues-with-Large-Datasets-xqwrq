```javascript
// bugSolution.js
import React, { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, value: `Item ${i}` }));

const Item = React.memo(({ item }) => (
  <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
    <Text>{item.value}</Text>
  </View>
));

const MyFlatList = () => {
  const memoizedData = useMemo(() => data, []);

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item item={item} />}
    />
  );
};

export default MyFlatList;
```