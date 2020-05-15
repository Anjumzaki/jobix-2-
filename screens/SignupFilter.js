import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View, 
    Text,
    Image
} from 'react-native'
import TransparentButton from '../components/TransparentButton';
import GradientButton from '../components/GradientButton';

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
            <View style={styles.SignupImage}>
                <Image
                    source={require('../assets/images/Inscription-entreprise-icon.png')} 
                />

                <View style={styles.Body}>
                    <Text style={{fontSize:20, paddingBottom: 10}}>Rechercher un profil</Text>
                    
                    <TransparentButton
                        style={styles.Button}
                        text='Competences recherchees'/>
                    
                    <TransparentButton
                        style={styles.Button}
                        text='Années d  expérience'/>
                    
                    <TransparentButton
                        style={styles.Button}
                        text='Type de visa'/>

                    <GradientButton
                        style={{width:'80%', marginTop:20}}
                        ButtonText='Recchercher'
                        onPress= {() => navigation.navigate('ProfileResult')}
                    />    

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
        marginTop:'-20%',
        height: '25%'
    },
    SignupImage:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop:'-10%'
    },
    Body:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop:30,
    },
    Button:{
        marginTop: 10
    }
  });