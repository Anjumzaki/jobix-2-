import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import TransparentButton from '../components/TransparentButton'
// import { getStatusBarHeight } from 'react-native-status-bar-height';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// const HEIGHT =  getstatusbarheight;

export default ({navigation}) => {
  return (
      <View style={styles.Container}>
        <Image style={styles.Logo}
            source = {require('../assets/images/Logo.png')} 
        />
        <View >
          <View style={styles.EmployeeContainer}>
            <Image style={styles.Employer}
                source = {require('../assets/images/unemployeur.png')} 
            />
            <TransparentButton 
                style={{marginTop: 20}}
                text= 'Je cherche un employeur'
                onPress={() => navigation.navigate('LoginWorker')}/>
          </View>

          <View style={styles.EmployeeContainer}>
            <Image style={styles.Employer}
                source = {require('../assets/images/unemploye(e).png')} 
            />
            <TransparentButton 
                text= 'Je cherche un(e) employé(e)'
                onPress={() => navigation.navigate('LoginEmploye')}/>
          </View>
        </View>
        
      </View>
  );
};

const styles = StyleSheet.create({
  Container:{
      height: windowHeight,
      width: windowWidth,
      alignItems: 'center',
      backgroundColor: '#fff',
      // paddingTop: HEIGHT,
      justifyContent:'space-evenly',
      paddingBottom:25
  },
  Logo:{
        marginTop: '15%'
  },
  EmployeeContainer:{
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Employer:{
      marginTop: '5%'
  }
});