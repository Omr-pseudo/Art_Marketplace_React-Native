import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';

import { Card, Paragraph } from 'react-native-paper';

import FillButton from '../../buttons/fill-button/fillbutton';

const UserCard = props => (
  <Card mode="elevated" style={styles.container}>
    <ScrollView>
    <Card.Cover style={styles.cover} source={require('../../../../assets/images/ph.png')} />
    <Card.Actions style={{justifyContent:"space-between"}}>
      <FillButton title="EDIT" onPress={props.pressedEdit} color="#66018a"/>
      <FillButton title="DELETE" onPress={props.pressedDelete} color="#260226"/>
    </Card.Actions>
    <Card.Title title={props.title}/>
    <Card.Title title={props.price}/>
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

export default UserCard;