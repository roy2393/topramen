import React from 'react';
import {View, Text, Settings, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FAIcons from 'react-native-vector-icons/FontAwesome5';
import Ramen from 'tr-common/entities/Ramen';
import Thumbnail from './Thumbnail';

export type Props = {
  ramen: Ramen,
  onPress: () => void,
};

const RamenCard = (props: Props) => {
  const {ramen, onPress} = props;
  const {brand, variety, topRank, topYear, country, stars, initials} = ramen;

  const renderStars = () => {
    if (typeof stars === 'number') {
      return (
        <Text
          style={{
            backgroundColor: 'green',
            color: 'white',
            borderRadius: 2,
            padding: 5,
            fontSize: 10,
          }}>
          <FAIcons
            name="star"
            color="#fff"
            size={10}
            style={{paddingRight: 2}}
          />
          <Text> {stars}</Text>
        </Text>
      );
    }
    return null;
  };

  const renderPrize = () => {
    if (typeof topRank === 'number') {
      return (
        <Text
          style={{
            backgroundColor: '#fff',
            color: '#F9A825',
            borderRadius: 2,
            padding: 2,
            fontSize: 10,
            fontWeight: 'bold'
          }}>
          <FAIcons
            name="award"
            color="#F9A825"
            size={10}
            style={{paddingRight: 2}}
          />
          <Text> #{topRank} - {topYear}</Text>
        </Text>
      );
    }
    return null;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.rightPanel}>
        <View style={{height: 60, width: 60, marginRight: 10}}>
          <Thumbnail initials={initials} />
        </View>
        <View>
          <Text style={styles.brandNameText}>{brand}</Text>
          <Text style={styles.membersText}>{variety}</Text>
          <Text style={styles.membersText}>
            <FAIcons name="map-marker-alt" size={10} />
            <Text> {country}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.leftPanel}>
        {renderStars()}
        {renderPrize()}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    padding: 10,
  },

  rightPanel: {flexDirection: 'row', width: '60%'},
  leftPanel: {alignItems: 'flex-end', justifyContent: 'space-between'},
  brandNameText: {color: '#212121', fontSize: 16},
  membersText: {color: '#212121', fontSize: 12},
});

export default RamenCard;
