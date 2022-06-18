import React from 'react';

import { Animated, ScrollView, StyleSheet } from 'react-native';

import { Card, Title, Paragraph } from 'react-native-paper';

import FillButton from '../../buttons/fill-button/fillbutton';

const BuyCard = props => (
  <Card mode="elevated" style={styles.container} elevation={20}>
    <ScrollView>
    <Card.Cover style={styles.cover} source={require('../../../../assets/images/ph.png')} />
    <Card.Title style={{fontFamily:"SpaceMono-Regular", fontWeight:"normal"}} title={props.title}/>
    <Card.Title style={{fontFamily:"SpaceMono-Regular", fontWeight:"normal"}} title={props.price}/>
    <Card.Actions style={{justifyContent:"flex-end"}}>
      <FillButton title="ADD TO CART" onPress={props.pressedEdit} color="#66018a"/>
    </Card.Actions>
    <Card.Content>
      <Paragraph style={{fontFamily:"SpaceMono-Regular", fontWeight:"normal"}} >{props.detail}</Paragraph>
    </Card.Content>
    
    
    </ScrollView>
  </Card>
);

const styles = StyleSheet.create({

  container: {

    backgroundColor:"#ffffff",
    borderRadius:36,
    marginHorizontal:32
  },
  cover:{
    marginHorizontal:62,
    marginTop:14
  }
});

export default BuyCard;