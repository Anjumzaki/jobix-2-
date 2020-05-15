import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View, 
    Text,
    Image
} from 'react-native'
import TransparentButton from '../components/TransparentButton'
import ProfileList from '../components/ProfileList'
import GradientButton from '../components/GradientButton';
import SimpleButton from '../components/SimpleButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation})=> {
    return(
        <View style={styles.Container}>
            <View style={styles.DashboardHeader}>
                <Image
                    style={{marginTop:15}} 
                    source={require('../assets/images/Resultats.png')}
                />
            </View>
            <View style={styles.ProfileBody}>
                <TransparentButton 
                    style={{marginTop:'-5%'}}
                    text='Resultats de la recherche'
                />

                <ProfileList
                    source={require('../assets/images/mike.png')}
                    Name='John Doe/Dev/HTML/ 3 ans'
                    Message= 'd exerience / Belgique'
                />

                <ProfileList
                    source={require('../assets/images/mike.png')}
                    Name='John Doe/Dev/HTML/ 3 ans'
                    Message= 'd exerience / Belgique'
                />

                <ProfileList
                    source={require('../assets/images/mike.png')}
                    Name='John Doe/Dev/HTML/ 3 ans'
                    Message= 'd exerience / Belgique'
                />

                <View style={styles.DropDowButtons}>
                    <SimpleButton
                        ButtonText='Back' 
                        onPress={() => navigation.navigate('Dashboard')}
                    />

                    <GradientButton
                    style={{width:'45%', marginLeft: '5%'}}
                        ButtonText='Next'
                        onPress={() => navigation.navigate('EmployeProfile')}/>
                </View>
            </View>
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
       height:'25%',
       backgroundColor:'#fff',
    },
    ProfileBody:{
        height:'75%',
        width: windowWidth,
        alignItems: 'center',
        backgroundColor:'#f6f6f6',
    },
    DropDowButtons:{
        flexDirection:'row',
        marginTop: 20
    },
})