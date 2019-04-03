import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default class Login extends React.Component {

    login(){
        Alert.alert(
            'Hello',
            'Hi Expo!',
            [
              {
                text: 'close',
                onPress: () => console.log('Close Pressed'),
                style: 'cancel',
              }
            ],
            {cancelable: false},
          );
    }
    render() {
        return (
            <View style={{alignItems:"center"}}>
                <TextInput
                style={styles.loginFields}
                placeholder="Email"
                onChangeText={(text) => this.setState({email})}
                />
                <TextInput
                style={styles.loginFields}
                placeholder="password"
                onChangeText={(text) => this.setState({password})}
                />
                <Button onPress={this.login}
                style={styles.loginButton}
                title="Login"
                accessibilityLabel="Button to login in"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginFields: {
        height: 60, width: 250,margin: 10, padding:5,backgroundColor:"#fff", borderRadius: 25, textAlign: "center"
    },
    loginButton:{
        height: 60, width: 250,margin: 10, padding:5,backgroundColor:"#30b0ff", borderRadius: 25, textAlign: "center"
    },
    appHeader:{
        height:100, alignSelf: 'stretch', textAlign: 'center'
    }
  });

