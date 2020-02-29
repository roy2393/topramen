import React, { useEffect, useState} from 'react';
import {View, Text, FlatList, TextInput, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import getRamensUC from 'tr-common/usecases/views/getRamensUC'
import {StoreType} from 'tr-common/redux/store';
import Ramen from 'tr-common/entities/Ramen';
import RamenCard from '../components/RamenCard';

type Props = {
  navigation: any,
};
const RamensList = (props: Props) => {

  const ramens = useSelector(
    (state: StoreType) => state.ramens,
  );

  const [searchText, setsearchText] = useState<string>('');

  useEffect(() => {
   getRamensUC();
  }, []);


  const goToRamenDetail = (item: Ramen) => {
    props.navigation.navigate('RamenDetail', {
      id: item.brand,
    });
  };

  const updateSearchList = (searchText:string) => {
    setsearchText(searchText);
  };

  if (Array.isArray(ramens.ramenCollection.ramens)) {
    return (
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: 'white',
        }}>
        <TextInput
          style={styles.input}
          onChangeText={updateSearchList}
          placeholder={'Search Restaurants'}
        />
        <View>

        </View>
        <FlatList
          data={ramens.ramenCollection.showList(searchText)}
          showsVerticalScrollIndicator={false}
          renderItem={(data: {item: Ramen, index: number}) => {
            const { item, index } = data;
            return (
              <RamenCard
                ramen={item}
                onPress={() => {
                  goToRamenDetail(item);
                }}
              />
            );
          }}
          keyExtractor={(item: Ramen) => item.brand+item.variety}
        />
      </View>
    )
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </View>
  )
}

export default RamensList;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
});