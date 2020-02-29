import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CommonStyles from '../styles';

type Props = {
  initials: string,
};
const Thumbnail = (props: Props) => {
  const { initials} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.initials}>
        {initials}
      </Text>
    </View>
  );
};

export default Thumbnail;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#e0e0e0',
    flex: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: { color: '#fff', fontSize: 18 }
});
