import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View, 
    Text,
    Image
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;

export default (props)=> {
    return(
        <View 
            style={styles.Container}>
            <Image
                    style={styles.image}
                    source={props.source}
            />
            <View style={styles.MessageContainer}>
                    <View style={styles.Message}>
                        <Text 
                            style={styles.Name}>
                            {props.Name}
                        </Text>
                    </View>
                    <View style={styles.Message}>
                        <Text 
                            style={styles.MessageText}>
                            {props.Message}
                        </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  Container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop:5,
    marginBottom:5,
    paddingTop: 5,
    paddingLeft:5,
    paddingBottom:5,
    paddingRight:10,
    borderRadius: 10,
    backgroundColor:'#fff',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  MessageContainer:{
      flexDirection: 'column',
  },
  MessageList:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
  },
  image:{
      height:55,
      width:55,
      borderColor: '#fff',
      borderWidth:0.5,
      borderRadius: 100
  },
  Message:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    padding:5,
    marginLeft: '-25%',
  },
  Name:{
      fontWeight: 'bold',
      marginLeft: '25%',
      fontSize:16
  },
  MessageText:{
    marginLeft: '25%',
    fontSize:16
  }  
})