import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

import BusinessCard from '../components/BusinessCard';

const url = 'http://merorating.azurewebsites.net/api/recentReview';

export default function Home() {
  const [reviews, setReviews] = React.useState();

  React.useEffect(() => {
    axios
      .get(url)
      .then(res => setReviews(res.data.latestReview))
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      {/* {reviews && console.log('r', reviews)} */}
      {reviews && (
        <FlatList
          data={reviews}
          renderItem={({item}) => <BusinessCard review={item} />}
        />
      )}
    </View>
  );
}
