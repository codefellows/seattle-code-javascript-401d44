import { useContext } from 'react';

import { AuthContext } from '../../context/auth.js';

function IsAuthorized({ children, capability }) {

  const authContext = useContext(AuthContext);

  const isLoggedIn = authContext.isLoggedIn;
  const isAuthorized = authContext.isAuthorized(capability);
  const isOkToRender = isLoggedIn && isAuthorized;

  return (
    <>
      {isOkToRender ? children : null}
    </>
  )
}

export default IsAuthorized;
