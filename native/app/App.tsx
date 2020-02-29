import React from 'react';
import {Provider} from 'react-redux';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import store from 'tr-common/redux/store/index';
import UseCaseInstance from 'tr-common/usecases';
import RamensList from './containers/RamensList';

const AppNavigator = createStackNavigator({
  Ramens: {
    screen: RamensList,
  },
});
const AppStack = createAppContainer(AppNavigator);

UseCaseInstance.initialize(store, 'http://192.168.1.30:3000');

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
