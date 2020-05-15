import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default (props) => {
    return(
        <View>
             <TouchableOpacity 
                style={styles.Button}
                activeOpacity= {0.7}
                onPress={props.onPress} 
             >
               <Text 
                  style={styles.ButtonText}>
                    {props.ButtonText} 
                </Text>
              </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    Button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        width:'100%',
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      },
      ButtonText: {
        color: '#000',
        paddingLeft:50,
        paddingRight:50
      }
})