import React from 'react';
import { Provider } from 'react-redux';
import RepositoryList from './components/RepositoryList';

import store from './store';
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <RepositoryList />
      </div>
    </Provider>
  );
};

export default App;
