import { useContext, useState } from 'react';

import { AuthContext } from '../../context/auth';

function Login() {

  const [user, setUsername] = useState('');
  const [pass, setPassword] = useState('');
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user, pass);
  }

  console.log(isLoggedIn)
  return (
    <>
      {isLoggedIn
        ? <button onClick={logout}>Logout</button>

        : <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="username" placeholder="username" />
            <input onChange={handleChange} name="password" placeholder="password" />
            <button type="submit">Login</button>
        </form>
      }
    </>
  )
}

export default Login;
