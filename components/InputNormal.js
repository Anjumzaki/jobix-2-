import React from 'react';
import {StyleSheet, View, TextInput, Text, Image} from 'react-native';
//import vector icons
// import FontAwesomeIcon from 'react-native-vector-icons/MaterialIcons';

export default (props) => {
    return(
        <View 
            style={[styles.Input, props.style]}>
             <TextInput 
                style={styles.inputBox}
                placeholder = {props.placeholder}
                secureTextEntry={props.secureTextEntry}
                maxLength={props.maxLength}
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
              />
        </View>

    )
}

const styles = StyleSheet.create({
    Input:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:"5%",
        marginBottom: '5%',
        height: 30,        
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
    inputBox:{
        padding: 5,
        width:'99%',
        height: 25,
        marginStart: 10,
        fontSize:14
    }  
})