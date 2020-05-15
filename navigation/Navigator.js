import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import First3 from '../screens/First3';
import ForgotPassword from '../screens/ForgotPassword'
import Dashboard from '../screens/Dashboard'
import LoginEmploye from '../screens/LoginEmploye';
import LoginWorker from '../screens/LoginWorker'
import Signup from '../screens/Signup';
import Payment from '../screens/Payment';
import ProfileResult from '../screens/ProfileResult';
import SignupFilter from '../screens/SignupFilter';
import EmployeProfile from '../screens/EmployeProfile'
import CompanyProfile from '../screens/CompanyProfile';
import Chat from '../screens/Chat';
import Splash from '../screens/Splash'
import LinearGradient from 'react-native-linear-gradient';

const Stack = createStackNavigator();

export default (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                    <Stack.Screen name="Splash" 
                        component={Splash}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="First3" 
                        component={First3}
                        options={{ headerShown: false }}
                    />   
                    <Stack.Screen name="LoginEmploye" 
                        component={LoginEmploye}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="LoginWorker" 
                        component={LoginWorker}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="ForgotPassword" 
                        component={ForgotPassword}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Signup" 
                        component={Signup}
                        options={{
                            title: '',
                            headerBackground,
                            headerStyle: {
                              backgroundColor: 'transparent',
                            },
                            headerTintColor:'#fff',
                            headerBackTitle: 'null'
                          }}    
                    />
                    <Stack.Screen name="Payment" 
                        component={Payment}
                        options={{
                          title: '',
                          headerBackground,
                          headerStyle: {
                            backgroundColor: 'transparent',
                          },
                          headerTintColor: '#fff',
                          headerBackTitle: 'null'
                        }}
                    />
                    <Stack.Screen name="SignupFilter" 
                        component={SignupFilter}
                        options={{
                            title: '',
                            headerBackground,
                            headerStyle: {
                              backgroundColor: 'transparent',
                            },
                            headerTintColor:'#fff',
                            headerBackTitle: 'null'
                          }}    
                    />
                    <Stack.Screen name="Dashboard" 
                        component={Dashboard}
                        options={{
                            title: 'Tableau de bord',
                            headerBackground,
                            headerStyle: {
                              shadowColor: 'transparent'
                            },
                            headerTintColor: '#fff',
                            headerBackTitle: 'null',
                            headerTitleAlign: 'center'
                          }}    
                    />
                    <Stack.Screen name="ProfileResult" 
                        component={ProfileResult}
                        options={{
                            title: '',
                            headerStyle: {
                              backgroundColor: '#fff',
                            },
                            headerBackTitle: 'null'
                          }}    
                    />
                    <Stack.Screen name="EmployeProfile" 
                        component={EmployeProfile}
                        options={{
                            title: '',
                            headerBackground,
                            headerStyle: {
                              backgroundColor: 'transparent',
                            },
                            headerTintColor:'#fff',
                            headerBackTitle: 'null'
                          }}    
                    />
                    <Stack.Screen name="CompanyProfile" 
                        component={CompanyProfile}
                        options={{
                            title: '',
                            headerBackground,
                            headerStyle: {
                              backgroundColor: 'transparent',
                            },
                            headerTintColor:'#fff',
                            headerBackTitle: 'null'
                          }}    
                    />
                    <Stack.Screen name="Chat" 
                        component={Chat}
                        options={{
                            title: '',
                            headerBackground,
                            headerStyle: {
                              backgroundColor: 'transparent',
                            },
                            headerTintColor:'#fff',
                            headerBackTitle: 'null'
                          }}    
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const headerBackground = () => (
  <LinearGradient
    colors={["#df3bb0", "#8000FF"]}
    style={{ flex: 1 }}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  />
)