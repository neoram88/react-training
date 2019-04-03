import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class MathComponent extends React.Component {

    render() {
        return (
            <View>
                 <TextInput
                style={styles.inputFields}
                placeholder="Enter first input"
                name
                onChange={(e) => this.props.changeHandler1(e)}
                />
                <TextInput
                style={styles.inputFields}
                placeholder="Enter Operator"
                onChange={(e) => this.props.changeHandler3(e)}
                />
                 <TextInput
                style={styles.inputFields}
                placeholder="Enter second input"
                onChange={(e) => this.props.changeHandler2(e)}
                />      
            </View>
        );
    }
}


const styles = StyleSheet.create({
    inputFields: {
        height: 60, width: 250,margin: 10, padding:5,backgroundColor:"#fff", borderRadius: 25, textAlign: "center"
    }
  });


