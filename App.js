import React from 'react';
import { Provider } from 'react-redux';
import AppNav from './src/config/router';
import store from './src/store'

function App() {
  return (
    
  <Provider store={store}>
 <AppNav></AppNav>
  </Provider>

  );
}


export default App;