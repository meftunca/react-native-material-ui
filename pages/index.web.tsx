import React from 'react';
import {ScrollView, Platform} from 'react-native';
import ButtonPage from './Button';
import SurfacePage from './Surface';
import TextField from './TextField';
import {Button, Palette, Provider} from '../src';
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
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {hot} from 'react-hot-loader';

const RouterS = () => {
  return (
    <Provider>
      <>
        {Platform.OS === 'web' ? (
          <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
        ) : null}
        <Router>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <nav
              style={{
                height: '100vh',
                minWidth: 240,
                position: 'fixed',
                left: 0,
                top: 0,
                padding: '32px 0',
                boxShadow: '3px 0 10px 1px rgba(0,0,0,.1)',
                backgroundColor: '#eee',
              }}>
              <img src={require('./../logo/storybook.png')} />
              <CustomDrawerContent />
            </nav>

            {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
            <div style={{padding: 32, marginLeft: 240, width: '100%'}}>
              <Switch>
                <Route path="/AppBarPage" component={AppBarPage} />
                <Route
                  path="/BottomNavigationPage"
                  component={BottomNavigationPage}
                />
                <Route path="/BannerPage" component={BannerPage} />
                <Route path="/ButtonPage" component={ButtonPage} />
                <Route path="/Carousel" component={CarouselPage} />
                <Route path="/CardPage" component={CardPage} />
                <Route path="/SurfacePage" component={SurfacePage} />
                <Route path="/Typography" component={Typography} />
                <Route path="/Lists" component={List} />
                <Route path="/CollapsePage" component={CollapsePage} />
                <Route path="/TextField" component={TextField} />
                <Route path="/MenuPage" component={MenuPage} />
                <Route path="/DialogsPage" component={DialogsPage} />
                <Route path="/Chip" component={Chip} />
                <Route path="/FormControlPage" component={FormControlPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </>
    </Provider>
  );
};
const CustomDrawerContent = () => {
  return (
    <ScrollView>
      <Link to="/AppBarPage" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          AppBar Page
        </Button>
      </Link>

      <Link to="/BannerPage" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          Banner Page
        </Button>
      </Link>

      <Link to="/BottomNavigationPage" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          BottomNavigation Page
        </Button>
      </Link>

      <Link to="/ButtonPage" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          Buttons Page
        </Button>
      </Link>

      <Link to="/CardPage" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          Card Page
        </Button>
      </Link>

      <Link to="/Carousel" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          Carousel Page
        </Button>
      </Link>

      <Link to="/CollapsePage" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          Collapse Page
        </Button>
      </Link>

      <Link to="/Chip" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          Chips Page
        </Button>
      </Link>

      <Link to="/DialogsPage" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          Dialogs Page
        </Button>
      </Link>

      <Link to="/FormControlPage" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          Form Control Page
        </Button>
      </Link>

      <Link to="/Lists" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          Lists Page
        </Button>
      </Link>

      <Link to="/MenuPage" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          Menus Page
        </Button>
      </Link>

      <Link to="/TextField" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          TextFields Page
        </Button>
      </Link>

      <Link to="/SurfacePage" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          Surfaces Page
        </Button>
      </Link>

      <Link to="/Typography" style={{textDecorationLine: 'none'}}>
        <Button type="drawer" color="black" onPress={() => null}>
          Typographies Page
        </Button>
      </Link>
    </ScrollView>
  );
};
export default hot(module)(RouterS);
