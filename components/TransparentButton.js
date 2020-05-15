import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
//import LinearGradient Componet to make Linear Gradient

export default (props) => {
    return(
        <View
            style={props.style}     
        >
            <LinearGradient
                colors={['#df3bb0', '#8000FF']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.Gradient}
            >
            <TouchableOpacity 
                style={styles.buttonContainer}
                activeOpacity= {0.7}
                onPress={props.onPress}>
                <Text style={styles.buttonText}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    </View>
    )
}

const styles = StyleSheet.create({
    Button:{
        marginBottom:10,
        // backgroundColor:blue
    },
    Gradient:{
        paddingHorizontal:2,
        paddingVertical:2,
        borderRadius:20,
        width: 300
    },
    buttonContainer: {
        backgroundColor:'white',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:20
    },
    buttonText:{
        textAlign: 'center'
    }
})