import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View, 
    Text,
    Image
} from 'react-native'
import GradientButton from '../components/GradientButton'
import ProfileDetails from '../components/ProfileDetails'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation})=> {
    return(
        <View style={styles.Container}>
            <View 
                style={styles.DashboardHeader}>
                <Image 
                    source={require('../assets/images/Rectangle.png')}
                />
            </View>
            <View
                style={styles.Avatar}>
                <Image
                    source={require('../assets/images/avatar.png')}
                />    
            </View>
            <Text 
                style={styles.Name}>
                Jhon Doe
            </Text>
            <ProfileDetails
                source={require('../assets/images/fav.png')}
                DetailsText= 'Compagnies qui m’ont ajoute en favoris'
                DetailsNumber= {5}  
                onPress={() => navigation.navigate('CompanyProfile')}    
            />
            <ProfileDetails
                source={require('../assets/images/Message.png')}
                DetailsText= 'Message en attente'
                DetailsNumber= {6}
                onPress={() => navigation.navigate('Chat')}    
            />
            <GradientButton 
                style={styles.Button}
                source={require('../assets/images/profile.png')}
                ButtonText='Mettre a jour mon profil'
                onPress={() => navigation.navigate('ProfileResult')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        height: windowHeight,
        width: windowWidth,
        alignItems: 'center',
        backgroundColor:'#fff',
    },
    DashboardHeader:{
        marginTop:'-20%'
    },
    Avatar:{
        marginTop:'-17%',
        backgroundColor:'#fff',
        opacity: 0.75,
        padding: 10,
        borderRadius: 100,
        overflow: "hidden",
        marginBottom: 10
    },
    Name:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    Button:{
        marginTop: '15%'
    }
  });