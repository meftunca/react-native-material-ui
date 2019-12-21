import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, ScrollView} from 'react-native';
import ButtonPage from './Button';
import SurfacePage from './Surface';
import TextField from './TextField';
import {useSafeArea} from 'react-native-safe-area-context';
import {Button, Palette, ThemeProvider, Provider, IconButton} from './../src';
import Typography from './Typography';
import List from './List';
import MenuPage from './Menu';
import DialogsPage from './Dialogs';
import Chip from './Chip';
import FormControlPage from './FormControl';
import AppBarPage from './AppBar';
import CollapsePage from './Collapse';
import BottomNavigationPage from './BottomNavigation';
import CarouselPage from './Carousel';
import BannerPage from './Banner';
import CardPage from './Card';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Router = () => {
  return (
    <SafeAreaProvider>
      <Provider>
        <NavigationNativeContainer>
          <Drawer.Navigator
            drawerType="front"
            drawerContentOptions={{activeTintColor: Palette.purple500}}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen
              name="home"
              component={({navigation}) => (
                <Stack.Navigator
                  initialRouteName="BannerPage"
                  headerMode="screen"
                  screenOptions={{
                    headerLeft: () => (
                      <IconButton
                        icon="menu"
                        color="black"
                        onPress={() => navigation.openDrawer()}
                      />
                    ),
                  }}>
                  <Stack.Screen name="AppBarPage" component={AppBarPage} />
                  <Stack.Screen
                    name="BottomNavigationPage"
                    component={BottomNavigationPage}
                  />
                  <Stack.Screen name="BannerPage" component={BannerPage} />
                  <Stack.Screen name="ButtonPage" component={ButtonPage} />
                  <Stack.Screen name="Carousel" component={CarouselPage} />
                  <Stack.Screen name="CardPage" component={CardPage} />
                  <Stack.Screen name="SurfacePage" component={SurfacePage} />
                  <Stack.Screen name="Typography" component={Typography} />
                  <Stack.Screen name="Lists" component={List} />
                  <Stack.Screen name="CollapsePage" component={CollapsePage} />
                  <Stack.Screen name="TextField" component={TextField} />
                  <Stack.Screen name="MenuPage" component={MenuPage} />
                  <Stack.Screen name="DialogsPage" component={DialogsPage} />
                  <Stack.Screen name="Chip" component={Chip} />
                  <Stack.Screen
                    name="FormControlPage"
                    component={FormControlPage}
                  />
                </Stack.Navigator>
              )}
            />
          </Drawer.Navigator>
        </NavigationNativeContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

const CustomDrawerContent: any = ({
  drawerPosition,
  navigation,
  ...rest
}: {
  drawerPosition: 'left' | 'right';
  navigation: any;
  rest: any;
}) => {
  const insets = useSafeArea();
  return (
    <ScrollView
      contentContainerStyle={[
        {
          paddingTop: insets.top + 8,
          paddingLeft: drawerPosition === 'left' ? insets.left : 0,
          paddingRight: drawerPosition === 'right' ? insets.right : 0,
        },
      ]}
      style={styles.container}>
      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('AppBarPage')}>
        AppBar Page
      </Button>
      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('BannerPage')}>
        Banner Page
      </Button>
      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('BottomNavigationPage')}>
        BottomNavigation Page
      </Button>
      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('ButtonPage')}>
        Buttons Page
      </Button>
      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('CardPage')}>
        Card Page
      </Button>
      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('Carousel')}>
        Carousel Page
      </Button>

      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('CollapsePage')}>
        Collapse Page
      </Button>
      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('Chip')}>
        Chips Page
      </Button>
      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('DialogsPage')}>
        Dialogs Page
      </Button>

      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('FormControlPage')}>
        Form Control Page
      </Button>
      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('Lists')}>
        Lists Page
      </Button>
      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('MenuPage')}>
        Menus Page
      </Button>
      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('TextField')}>
        TextFields Page
      </Button>

      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('SurfacePage')}>
        Surfaces Page
      </Button>
      <Button
        type="drawer"
        color="black"
        onPress={() => navigation.navigate('Typography')}>
        Typographies Page
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Router;
