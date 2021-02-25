import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 80,
  },
  title:{
    flex:1
  },
  textTitle:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    paddingTop:30
  },
  inputNumber:{
    flex:2
  },
  Row:{
    flex:1,
    flexDirection:'row'
  },
  textNum:{
    fontSize:15,
    flex:1,
    textAlign:'center',
    paddingTop:15

  },
  Values:{
    flex:3,
    borderWidth:0.5,
    borderRadius:5,
    margin:5
  },
  Result:{
    flex:1
  },
  button:{
    flex:1,
    flexDirection:'row'
  },
  btnButton:{
    flex:1,
    borderWidth:0.5,
    borderRadius:5,
    borderColor:'gray',
    margin:10,
  },
  Footer:{
    flex:6
  }
});

export default Style;