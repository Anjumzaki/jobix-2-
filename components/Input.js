import React from 'react';
import {StyleSheet, View, TextInput, Text, Image} from 'react-native';
//import vector icons
// import FontAwesomeIcon from 'react-native-vector-icons/MaterialIcons';

export default (props) => {
    return(
        <View 
            style={[styles.Input, props.style]}>
            <Image 
                style={styles.icon}
                source = {props.source}
            />
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
        width:'80%',
        borderLeftWidth: 2,
        marginTop:"5%",
        marginBottom: '5%',
        height: 45
    },
    icon:{
        paddingRight: 1,
    },
    inputBox:{
        padding: 5,
        width:'75%',
        height: 40,
        marginStart: 10,
        fontSize:16
    }  
})