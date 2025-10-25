import { render } from '@testing-library/react';
import NavBar from './NavBar';
import { UserProvider } from '../context/UserContext';

test('NavBar renders', () => {
  render(
    <UserProvider>
      <NavBar />
    </UserProvider>
  );
});