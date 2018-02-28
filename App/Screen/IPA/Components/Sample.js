import React, {Component} from 'react'
import {View, Text} from 'native-base';
import styles from '../Styles/style'
function renderSample(sample) {
  const {word, bold} = sample;
  let letter = [];
  for (let i = 0; i < word.length; i++) {
    letter.push(word[i]);
  }
  return (
    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 3}}>
      <View style={{flexDirection: 'row'}}>
        {
          letter.map((c, index) => {
            let letterStyle = {};
            if (bold.find(k => k == index) != undefined) {
              letterStyle = styles.bold;
            }
            return (
              <Text style={letterStyle} key={index}>{c}</Text>
            )
          })
        }
      </View>
    </View>
  )
}
export default renderSample
