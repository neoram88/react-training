import React from 'react';
import { View, Text } from 'react-native';

export default class ResultComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { result:this.props.result };
    }

    componentWillReceiveProps(nextProps, nextState){
        console.log(nextProps+"&"+nextState);
    }

    render() {
        return (
            <View>
                <Text style={{color:'red',fontSize:30}}>{this.props.result}</Text>  
            </View>
        );
    }
}



