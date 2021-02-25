import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Style from './Style';

export default class Calculator extends Component {

  constructor(props){
    super(props);
    this.state={
      res:0,
      a:0,
      b:0,
    };

  };

  getNum1(event){
    const x= event.nativeEvent.text;
    this.setState({a: x})
  }
  getNum2(event){
    const y= event.nativeEvent.text;
    this.setState({b:y})
  }

  add(){
    this.setState({res: parseInt(this.state.a) + parseInt(this.state.b)})
  }
  sub(){
    this.setState({res: this.state.a - this.state.b})
  }
  mul(){
    this.setState({res: this.state.a * this.state.b})
  }
  div(){
    this.setState({res: this.state.a / this.state.b})
  }
  render() {
    return (
      <View style={Style.container}>

        <View style={Style.title}>
          <Text style={Style.textTitle}>SIMPLE CALCULATOR
          </Text>
        </View>

        <View style={Style.inputNumber}>
          <View style={Style.Row}>
            <Text style={Style.textNum}>Number 1:
            </Text>
            <TextInput style={Style.Values} onChange={(event)=>{this.getNum1(event)}}/>
          </View>

          <View style={Style.Row}>
            <Text style={Style.textNum}>Number 2:
            </Text>
            <TextInput style={Style.Values}onChange={(event)=>{this.getNum2(event)}}/>
          </View>

          <View style={Style.Result}>
            <Text style={{fontSize:17, marginTop:10, paddingLeft:10}}> Result: {this.state.res}
            </Text>
          </View>

          <View style={Style.button}>
            <TouchableOpacity style={Style.btnButton} onPress={()=>{this.add()}}>
              <Text> Add(+)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.btnButton} onPress={()=>{this.sub()}}>
              <Text> Sub(-)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.btnButton} onPress={()=>{this.mul()}}>
              <Text> Mul(*)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.btnButton} onPress={()=>{this.div()}}>
              <Text> Div(/)
              </Text>
            </TouchableOpacity>
          </View>

          <View style={Style.Footer}>
          </View>
        </View>

      </View>
    );
  }
}


AppRegistry.registerComponent('Calculator', () => Calculator);