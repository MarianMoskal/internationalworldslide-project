import React from 'react';

const defaultValue = {
  locale: 'uk',
  setLocale: () => {},
};

export default React.createContext(defaultValue);
