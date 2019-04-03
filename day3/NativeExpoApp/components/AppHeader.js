import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Blink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <View style={{height: 100, width:'100%',margin: 10, alignItems: "center", backgroundColor:"#fff", textAlign: "center"}}>
        <Text style={{textAlign: 'center', justifyContent:'center', lineHeight:100, fontSize:32, alignSelf: 'center', textAlignVertical:'center', fontWeight: 'bold'}}>
        {this.props.text}
        </Text>
    </View>
    );
  }
}
