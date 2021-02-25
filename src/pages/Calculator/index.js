import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class SimpleCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      total: '',
    };
  }

  onTextChanged1(value) {
    // code to remove non-numeric characters from text
    const cls = value.replace(/[- #*+;,.<>\{\}\[\]\\\/]/gi, '');
    parseInt(cls);
    this.setState({
      number1: cls,
    });
  }

  onTextChanged2(value) {
    // code to remove non-numeric characters from text
    const cls = value.replace(/[- #*+;,.<>\{\}\[\]\\\/]/gi, '');
    parseInt(cls);
    this.setState({
      number2: cls,
    });
  }

  handleOperation(value) {
    switch (value) {
      case '+':
        this.setState({total: this.state.number1 + this.state.number2});
        console.log(this.state.total);
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Enter Number</Text>
          <TextInput
            placeholder={'Enter number 1 here'}
            style={styles.paragraph}
            keyboardType="numeric"
            onChangeText={(value) => this.onTextChanged1(value)}
            value={this.state.number1}
          />
          <TextInput
            placeholder={'Enter number 2 here'}
            style={styles.paragraph}
            keyboardType="numeric"
            onChangeText={(value) => this.onTextChanged2(value)}
            value={this.state.number2}
          />
        </View>
        <View style={{width: 120}}>
          <View style={styles.buttonGroups}>
            <TouchableOpacity
              style={{
                backgroundColor: '#e3e3e3',
                width: 50,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={this.handleOperation('+')}>
              <Text>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#e3e3e3',
                width: 50,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>SUB</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroups}>
            <TouchableOpacity
              style={{
                backgroundColor: '#e3e3e3',
                width: 50,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#e3e3e3',
                width: 50,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>SUB</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize: 40}}>{this.state.total}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    borderRadius: 3,
    padding: 5,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonGroups: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
