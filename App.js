import { StatusBar } from 'expo-status-bar';
import React, {Component, useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, View, Linking } from 'react-native';
import AlbumList from './src/pages/components/AlbumList';
import Navigation from './src/pages/navigation/Navigation';

class Test extends Component {
  // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  constructor(props){
    super(props);
    console.log('==========ini constructor=====')
    this.state = {
      data: 100,
      isShow: true,
    }
  }

  componentDidMount(){
    console.log('ini did mount')
    setTimeout(() => {
      this.setState({
        data: 103000
      })
    }, 3000);
  }

  componentDidUpdate(){
    console.log('ini did update')
  }

  componentWillUnmount(){
    console.log('ini will unmount')
  }

  render(){
    console.log('ini render')
    return(
      // <Navigation />
      <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 50}}>
        <Text>Hello Debugger {this.state.data}</Text>
      </View>
    )
  }
}

const App = () => {
  const [isShow, setIsShow] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false)
    }, 6000);
  }, [])
  return(
    <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 50}}>
        {isShow && <Test />}
      </View>
  )
}

export default App;