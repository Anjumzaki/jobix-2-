import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Dimensions
} from "react-native";
import CheckBox from '@react-native-community/checkbox'
import TransparentButton from "../components/TransparentButton";
import Input from "../components/InputNormal";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [isSelected, setSelection] = useState(false);

  const ModalClose = () => {
        setModalVisible(!modalVisible);
        navigation.navigate('Signup')
  }

  return (
    <View style={styles.Container}>
        <View 
            style={styles.PaymentHeader}>
            <Image 
                source={require('../assets/images/Rectangle.png')}
            />
        </View>

            <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => navigation.navigate('Signup') }
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableHighlight
              style={styles.Cross}
              onPress={ModalClose}
            >
            <Image 
                source={require('../assets/images/cross.png')}
            />
           </TouchableHighlight>
            <Image 
                source={require('../assets/images/Ellipse.png')}
            />
            
            <View style={styles.ModalItems}>
                <Text style={styles.textStyle}>Nom du titulaire :</Text>
                <Input
                    placeholder='Samina Yasmin'
                />

                <Text style={styles.textStyle}>Numéro de carte :</Text>
                <Input
                    placeholder='5555 5555 5555 4444'
                    keyboardType='numeric'
                />

                <Text style={styles.textStyle}>Mois d'expiration :</Text>
                <Input
                    placeholder='dd/mm/yyyy'
                    keyboardType='numeric'
                />
                
                <View style={styles.DateContainer}>
                    <View>
                        <Text style={styles.textStyle}>MM/YY :</Text>
                        <Input
                            style={{width:'69%'}}
                            placeholder='11/19'
                            keyboardType='numeric'
                        />
                    </View>
                    <View>
                        <Text style={styles.textStyle}>CVV :</Text>
                        <Input
                            style={{width:'69%',}}
                            placeholder='121'
                            keyboardType='numeric'
                            maxLength={3}
                        />
                    </View>
                </View>

                <View style={styles.CheckBoxContainer}>
                    <CheckBox
                    value={isSelected}
                    style={styles.checkbox}
                    onPress= { isSelected => setSelection(true)}
                    />
                    <Text style={styles.label}>Cliquez pour enregistrer le mode de paiement</Text>
                </View>

            </View>

            <TransparentButton
                style={{width:'100%', marginTop: 20}}
                text='Confirmer'
                onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate('CompanyProfile')
              }}
            >
            </TransparentButton>
          </View>
        </View>
      </Modal>
      
    </View>
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
    PaymentHeader:{
        marginTop:'-20%'
      },    
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 22,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  Cross:{
    marginLeft:'95%'
  },
  ModalItems:{
    marginTop: 20
  },
  textStyle: {
    fontWeight: "bold"
  },
  CheckBoxContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label:{
      fontSize:12,
      paddingLeft:5,
      paddingRight:5
  },
  DateContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    marginLeft:'10%',
  },
});
