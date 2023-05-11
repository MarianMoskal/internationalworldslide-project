import React from 'react';

const defaultValue = {
  locale: 'ua',
  setLocale: () => {},
};

export default React.createContext(defaultValue);
