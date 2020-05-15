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
        <SafeAreaView style={styles.Container}>
            <Image
                    style={styles.image}
                    source={props.source}
            />
            <Text style={styles.skills}>{props.skills} : </Text>
            <Text style={styles.skillsDetail}>{props.skillsDetail}</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  Container:{
    width: windowWidth,
    flexDirection: 'row',
    paddingTop:10,
    paddingBottom:10,
    paddingRight:30,
    marginLeft: 20
  },
  image:{
      height:20,
      width:20,
      marginRight:10
  },
  skills:{
      fontSize:14,
      marginRight:5
  },
  skillsDetail:{
      fontSize:14,
      fontWeight:'bold',
      marginRight:5,
      flexShrink: 1
  }  
})