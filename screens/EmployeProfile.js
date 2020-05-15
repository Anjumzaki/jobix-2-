import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View, 
    Text,
    Image,
    ScrollView
} from 'react-native'
import EmployeProfileDetais from '../components/EmployeProfileDetails'
import TransparentButton from '../components/TransparentButton'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation})=> {
    return(
        <ScrollView style={styles.Container}>
            <View 
                style={styles.DashboardHeader}>
                <Image 
                    source={require('../assets/images/profile-bg.png')}
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
            
            <EmployeProfileDetais
                source={require('../assets/images/Langue.png')} 
                skills='Language'
                skillsDetail= 'French, English'/>

            <EmployeProfileDetais
                source={require('../assets/images/Emplacement.png')} 
                skills='Emplacement'
                skillsDetail= 'Bruxelles, Belgique'/>
            
            <EmployeProfileDetais
                source={require('../assets/images/Expert.png')} 
                skills='Expert en'
                skillsDetail= 'HTML, Java, Ruby'/>

            <EmployeProfileDetais
                source={require('../assets/images/Experience.png')} 
                skills='Expérience'
                skillsDetail= 'HTML, Java, Ruby'/>

            <EmployeProfileDetais
                source={require('../assets/images/Passport.png')} 
                skills='Passeport'
                skillsDetail= 'Programme travail vacances'/>

            <EmployeProfileDetais
                source={require('../assets/images/Passions.png')} 
                skills='Mes passions'
                skillsDetail= 'La course à pied, les voyages et les jeux vidéos'/>

            <TransparentButton
                style={{alignItems: 'center', marginTop:20}}
                text='Mettre à jour mon profil'
            />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    Container:{
        height: windowHeight,
        width: windowWidth,
        backgroundColor:'#fff',
    },
    DashboardHeader:{
        width:windowWidth,
        marginTop:'-20%',
    },
    Avatar:{
        marginTop:'-45%',
        marginLeft:20
        },
    Name:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop:10,
        marginLeft:25
    },
}
)