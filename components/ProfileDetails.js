import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

export default (props)=> {
    return(
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.ProfileDetails}
            onPress={props.onPress}
         > 
            <View style={styles.image}>
                <Image
                    source={props.source}
                />
                <Text 
                style={styles.DetailsText}>
                    {props.DetailsText}</Text>
            </View>
            <Text style={styles.Number}>
                {props.DetailsNumber}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ProfileDetails:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'90%',
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 10,
        padding:10,
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
    image:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    DetailsText:{
        marginLeft: 10
    },
    Number:{
        fontWeight: 'bold',
        fontSize:18,
        textAlign: 'right', 
        alignSelf: 'stretch'
    }
})