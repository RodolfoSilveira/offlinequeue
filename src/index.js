import React from 'react';
import {Provider} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

NetInfo.addEventListener(console.log);

import './config/ReactotronConfig';
import store from './store';

import RepositoryList from './components/RepositoryList';

const App = () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;
