import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View, 
    Text,
    Image,
    ScrollView
} from 'react-native'
import RectangularButton from '../components/RectangularButton'

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

                <ScrollView style={styles.Body}>
                    <Text style={{fontSize:20, paddingBottom: 10}}>Inscription entreprise</Text>
                    <Text style={{fontSize:16, paddingBottom: 20}}>Mes besoins en recrutement par annee</Text>
                    <RectangularButton 
                        style={styles.Button}
                        ButtonText='Jusquà 5 personnes: 200 CAD / mois '
                        onPress={() => navigation.navigate('Payment')}
                    />
                    <RectangularButton 
                        style={styles.Button}
                        ButtonText='5 - 25 personnes : 500 CAD/mois'
                        onPress={() => navigation.navigate('Payment')}
                    />
                    <RectangularButton 
                        style={styles.Button}
                        ButtonText='Plus de 25 employés : 1000 CAD/mois '
                        onPress={() => navigation.navigate('Payment')}
                    />
                </ScrollView>
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
        // justifyContent:'center',
        // alignItems: 'center',
        marginTop:30,
    },
    Button:{
        marginTop: '5%'
    }
  });