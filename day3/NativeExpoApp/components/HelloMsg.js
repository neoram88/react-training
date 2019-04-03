import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default class HelloMsg extends React.Component {

    sayHello(){
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
            <View>
                <Text>Hello {this.props.name}</Text>
                <Button onPress={this.sayHello}
                title="Say Hello"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

