import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MathComponent from '../components/MathComponent';
import ResultComponent from '../components/ResultComponent';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input1:'',input2:'',operator:'',result:'' };
    }

    handleInput1Change(e) {
        this.setState({input1:parseInt(e.nativeEvent.text)});
        this.calculate();
    }

    handleInput2Change(e){
        this.setState({input2:parseInt(e.nativeEvent.text)});
        this.calculate();
    }
    handleInput3Change(e){
        this.setState({operator:e.nativeEvent.text});
        this.calculate();
    }

    calculate(){
        let res='';
        if(this.state.operator=="+"){
            res=this.state.input1+this.state.input2;
            this.setState({result:res})
        }else if(this.state.operator=="-"){
            res=this.state.input1-this.state.input2;
            this.setState({result:res})
        }else if(this.state.operator=="*"){
            res=this.state.input1*this.state.input2;
            this.setState({result:res})
        }
    }

    render() {
        return (
            <View style={{alignItems:"center"}}>
                <Text>Math App</Text>
                <MathComponent changeHandler1={(e)=>this.handleInput1Change(e)}
                changeHandler2={(e)=>this.handleInput2Change(e)}
                changeHandler3={(e)=>this.handleInput3Change(e)}
                />
                <ResultComponent result={this.state.result}/>
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

