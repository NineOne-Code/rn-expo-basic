import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View, Linking, BackHandler } from 'react-native';
import AlbumList from '../components/AlbumList';

function Album() {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => {
            BackHandler.addEventListener('hardwareBackPress', () => true)
        }
    }, [])
    return(
      <View style={{flex: 1}}>
        <View style={styles.ViewStyle}>
          <Text style={styles.textStyle}>Albums</Text>
        </View>
        <AlbumList />
      </View>
    )
}

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: '#c2c2c2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  }
})

export default Album;