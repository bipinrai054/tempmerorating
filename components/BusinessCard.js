import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {COLORS, SIZES, SHADOWS} from '../constants';
// import StarRating from 'react-native-star-rating';

import {Rating} from 'react-native-ratings';

const BusinessCard = props => {
  return (
    <View
      style={{
        padding: 55,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        ...SHADOWS.dark,
        margin: 10,
      }}>
      {/* <Text style={{color: 'red'}}>test</Text> */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 10,
          }}
          source={{
            uri: props.review.review_profileImg,
          }}
        />
        {/* rating goes here */}

        <Rating imageSize={25} ratingCount={props.review.rating} />

        <Text style={{marginLeft: 6, color: 'black'}}>
          {props.review.rating.toFixed(2)}
        </Text>
      </View>

      <View
        style={{
          marginBottom: 20,
        }}>
        <Text style={{color: 'black'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
            }}>
            {props.review.review_by}
          </Text>{' '}
          reviewed{' '}
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}>
            {props.review.businessName}
          </Text>
        </Text>
      </View>

      <Text
        style={{
          color: 'black',
          fontWeight: '400',
          lineHeight: 20,
        }}>
        {/* "{props.review.reviews.substring(0, 100)}" */}"
        {props.review.reviews}"
      </Text>
    </View>
  );
};

export default BusinessCard;
