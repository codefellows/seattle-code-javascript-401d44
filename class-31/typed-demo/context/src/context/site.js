import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {

  let [state, setState] = useState({
    title: 'My Awesome Website!',
    twitter: 'jacobstwitter'
  });

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default Settings;
