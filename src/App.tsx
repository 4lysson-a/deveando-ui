import React from 'react';

import { CustomToastProvider } from './components';

import ToastsDemo from './demo/ToastsDemo';

const App = () => {
  return (
    <CustomToastProvider>
      <ToastsDemo />
    </CustomToastProvider>
  );
};

export default App;
