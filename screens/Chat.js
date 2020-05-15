import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View, 
    Text,
    Image
} from 'react-native'
// import { GiftedChat } from 'react-native-gifted-chat'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation}) => {
    return(
        <View>
            <Text>Chat Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    height: windowHeight,
    width: windowWidth,
})