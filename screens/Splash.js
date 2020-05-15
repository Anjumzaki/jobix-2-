import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';


export default ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('First3')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

  return (
      <View 
          style={styles.Header}>
        <Image 
            style={styles.Logo}
            source = {require('../assets/images/JobixLogo.png')} 
        />
        <Text 
          style={{marginTop:'5%'}}>
          V1.0
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  Header:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      height: '100%'
  }
});