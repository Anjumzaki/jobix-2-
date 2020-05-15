import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions
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
          <Text style={styles.Password}>
            Forget Password.?
          </Text>
          <Text style={styles.Password}>
            Enter your registered Email below to receive password reset intruction
          </Text>
          <Input 
            style={{backgroundColor:'#f6d8ed', borderLeftColor: '#df3bb0',}}
            source={require('../assets/images/UserName.png')}
            placeholder='E-mail'
          />
          <TransparentButton 
            text= 'SEND'
            onPress={() => navigation.navigate('LoginWorker')}/>
          <TouchableOpacity 
            style={styles.NewAccount}
            onPress={() => navigation.navigate('LoginWorker')}
          >
            <Text>Back To Login</Text>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  Container:{
      height: windowHeight,
      width: windowWidth,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#fff',
  },
  Password:
  {
    textAlign:'left',
    alignSelf: 'stretch',
    marginBottom: '5%',
    paddingBottom:2,
    marginLeft:'10%',
    marginRight: '10%'
  },
  NewAccount:{
    alignItems: 'center',
    padding: 5,
    marginTop:20,
    fontWeight: 'bold'
  },
});