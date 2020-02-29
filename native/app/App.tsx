import React from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import store from 'tr-common/redux/store/index';
import UseCaseInstance from 'tr-common/usecases';
import RamensList from './containers/RamensList';

const AppNavigator = createStackNavigator(
  {
    Ramens: {
      screen: RamensList,
    },
  },
  {defaultNavigationOptions: {header: () => null}},
);
const AppStack = createAppContainer(AppNavigator);

UseCaseInstance.initialize(store, 'http://starlord.hackerearth.com');

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
