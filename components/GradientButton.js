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
        <View style={props.style}>
            <LinearGradient
                colors={['#df3bb0', '#8000FF']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.Gradient}
            >
            <TouchableOpacity 
                style={styles.buttonContainer}
                activeOpacity= {0.7}
                onPress={props.onPress}>
                <Image 
                    source={props.source} 
                />
                <Text style={styles.buttonText}>
                    {props.ButtonText}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    </View>
    )
}

const styles = StyleSheet.create({
    Gradient:{
        height: 48, 
        width: '90%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '90%', 
        borderRadius: 25,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        alignItems: 'center',
        borderRadius: 25
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        padding: 10,
        fontSize: 16,
        marginRight:'15%'
  }
})