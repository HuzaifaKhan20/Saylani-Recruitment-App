import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SecondScreen from './Screens/SecondScreen';
import FirstScreen from './Screens/FirstScreen';
import SigninScreen from './Screens/SigninScreen';
import AdminLoginScreen from './Screens/AdminLogin';
import AdminSignin from './Screens/AdminSignin';
import VacancyScreen from './Screens/VacancyScreen';
import NotificationScreen from './Screens/NotificationScreen';
import AdminDashboard from './Screens/AdminDashboard';
import RegisterScreen from './Screens/RegisterScreen';
import DetailScreen from './Screens/DetailScreen';
import Form from './Screens/Form';
import VacancyForm from './Screens/VacancyForm';
import NotificationsForm from './Screens/NotificationForm';
import CompanySecondScreen from './Screens/CompanySignin';
import StudentSecondScreen from './Screens/StudentSignin';
import StudentLoginScreen from './Screens/StudentLogin';
import CompanyLoginScreen from './Screens/CompanyLogin';
import CompanyDashboard from './Screens/CompanyDashboard';
import StudentDashboard from './Screens/StudentDashboard';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#fff" },
  headerTitleStyle: { color: "lightgreen" },
  headerTitleAlign: "center",
  headerTintColor: "lightgreen",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions} >
        <Stack.Screen name="Welcome To Saylani Recruitment" component={FirstScreen} />
        <Stack.Screen name="Saylani Recruitment App" component={SecondScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Admin Signin" component={AdminLoginScreen} />
        <Stack.Screen name="Admin Dashboard" component={AdminDashboard} />
        <Stack.Screen name="Vacancies" component={VacancyScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Admin Sign in" component={AdminSignin} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Vacancy Form" component={VacancyForm} />
        <Stack.Screen name="Notification Form" component={NotificationsForm} />
        <Stack.Screen name="Student Signin" component={StudentSecondScreen} />
        <Stack.Screen name="Company Signin" component={CompanySecondScreen} />
        <Stack.Screen name="Student Sign in" component={StudentLoginScreen} />
        <Stack.Screen name="Company Sign in" component={CompanyLoginScreen} />
        <Stack.Screen name="Company Dashboard" component={CompanyDashboard} />
        <Stack.Screen name="Student Dashboard" component={StudentDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  }


