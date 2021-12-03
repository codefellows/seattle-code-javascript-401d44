import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AuthProvider, { AuthContext } from '../context/auth';

describe('Testing the Auth Context Provider', () => {

  let Test = () => (
    <AuthContext.Consumer>
      {context => {

        return (
          <>
            <p data-testid="user">{context.user.username}</p>
            <p data-testid="isLoggedIn">{JSON.stringify(context.isLoggedIn)}</p>
            {context.user.capabilities.map((capability, idx) => (
              <p key={idx} data-testid={`capability-${capability}`}>{capability}</p>
            ))}
            <p data-testid="authorized">{JSON.stringify(context.isAuthorized('read'))}</p>
            <button data-testid="login" onClick={() => context.login('administrator', 'test')}>Login</button>
            <button data-testid="logout" onClick={() => context.logout()}>Login</button>
          </>
        )
      }}
    </AuthContext.Consumer>
  );

  it('Context contains properties for User and isLoggedIn', () => {
    render(
      <AuthProvider>
        <Test />
      </AuthProvider>
    )

    expect(screen.getByTestId('user')).toHaveTextContent('');
    expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('false');
  });

  it('Should be able to log in a user with username and password, user capabilities are present', () => {

    render(
      <AuthProvider>
        <Test />
      </AuthProvider>
    )

    // click the login button
    let button = screen.getByTestId('login');
    fireEvent.click(button);

    // assert that context values have updated
    expect(screen.getByTestId('user')).toHaveTextContent('administrator');
    expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('true');
    expect(screen.getByTestId('capability-read')).toBeInTheDocument();
    expect(screen.getByTestId('capability-create')).toBeInTheDocument();
    expect(screen.getByTestId('capability-update')).toBeInTheDocument();
    expect(screen.getByTestId('capability-delete')).toBeInTheDocument();
  });

  it('should be able to authorize a user based on capability', () => {
    render(
      <AuthProvider>
        <Test />
      </AuthProvider>
    )

    // click the login button
    let button = screen.getByTestId('login');
    fireEvent.click(button);

    expect(screen.getByTestId('authorized')).toHaveTextContent('true');
  });

  it('Should be able to logout a User', () => {
    render(
      <AuthProvider>
        <Test />
      </AuthProvider>
    );

    let button = screen.getByTestId('login');
    fireEvent.click(button);

    expect(screen.getByTestId('user')).toHaveTextContent('administrator');
    expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('true');

    button = screen.getByTestId('logout');
    fireEvent.click(button);

    expect(screen.getByTestId('user')).toHaveTextContent('');
    expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('false');
  });

});
