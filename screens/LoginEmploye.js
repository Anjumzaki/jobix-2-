import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  ImageBackground
} from 'react-native';
import TransparentButton from '../components/TransparentButton'
import Input from '../components/Input'
import LogoHeader from '../components/LogoHeader'
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation}) => {
  return (
      <View style={styles.Container}>
          <LogoHeader
            source={require('../assets/images/employer.png')}
           />

          <ImageBackground
              style={styles.FlagBaackground} 
              source={require('../assets/images/canada-flag.png')} 
          >
            <Input 
              style={{backgroundColor:'#f6d8ed', borderLeftColor: '#df3bb0',}}
              source={require('../assets/images/UserName.png')}
              placeholder='Nom d utilisateur'
            />
            <Input 
              source={require('../assets/images/mail.png')}
              style={{backgroundColor:'#d9d0f4', borderLeftColor: '#5c2ae8',}}
              placeholder='Mot de passe (Password)'
            />
            <TouchableOpacity
              style={styles.Password}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text>Mot de passe oublié ?</Text>
            </TouchableOpacity>
          </ImageBackground>

          <TransparentButton 
            text= 'Connexion'
            onPress={() => navigation.navigate('Dashboard')}/>
          <TouchableOpacity 
            style={styles.NewAccount}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text>Vous n’avez pas de compte ? </Text>
            <Text style={styles.Underline}> Créez un compte </Text>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  Container:{
      height: windowHeight,
      width: windowWidth,
      alignItems: 'center',
      backgroundColor:'#fff',
  },
  Logo:
  {
    marginTop: '15%'
  },
  FlagBaackground:{
    width: windowWidth,
    resizeMode: 'cover',
    alignItems: "center",
    justifyContent: 'center'
  },
  Password:
  {
    marginLeft: '50%',
    marginBottom: '5%',
    padding:5
  },
  NewAccount:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: '10%'
  },
  Underline:{
    textDecorationLine: 'underline'
  }
});