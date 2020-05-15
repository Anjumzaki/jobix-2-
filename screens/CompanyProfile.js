import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View, 
    Text,
    Image
} from 'react-native'
import EmployeProfileDetais from '../components/EmployeProfileDetails'
import TransparentButton from '../components/TransparentButton'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation})=> {
    return(
        <View style={styles.Container}>
            <View 
                style={styles.DashboardHeader}>
                <Image 
                    source={require('../assets/images/profile-bg.png')}
                />
            </View>
            <View
                style={styles.Avatar}>
                <Image
                    style={styles.companyLogo}
                    source={require('../assets/images/CompanyLogo.png')}
                />    
            </View>
            <Text 
                style={styles.Name}>
                Company Name
            </Text>
            
            <EmployeProfileDetais
                source={require('../assets/images/Emplacement.png')} 
                skills='Emplacement'
                skillsDetail= 'Québec, Québec'/>

            <EmployeProfileDetais
                source={require('../assets/images/Emplacement.png')} 
                skills='Nombre de poste à combler'
                skillsDetail= '5'/>
            
            <EmployeProfileDetais
                source={require('../assets/images/Expert.png')} 
                skills='Type de postes'
                skillsDetail= 'TI, Admin'/>

            <TransparentButton
                style={{alignItems: 'center', marginTop:20}}
                text='Rechercher'
                onPress={() => navigation.navigate('SignupFilter')}
            />
        </View>
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
        marginTop:'-43%',
        marginLeft:20
    },
    companyLogo:{
        backgroundColor:'#fff',
        opacity: 0.75,
        padding: 20,
        borderRadius: 100,
        overflow: "hidden",
        height:120,
        width:120
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