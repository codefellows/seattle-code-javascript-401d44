// setup our context provider

import React, { useState } from 'react';

export const SettingsContext = React.createContext(); // our Context singleton from which we can derive / get access to our Provider...

function SettingsProvider({ children }) {

  const [pagination, setPagination] = useState(3);
  const [sort, setSort] = useState('difficulty');
  const [hide, setHide] = useState(false);

  const values = {
    pagination: 3,
    sort: 'difficulty',
    hide: false
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
