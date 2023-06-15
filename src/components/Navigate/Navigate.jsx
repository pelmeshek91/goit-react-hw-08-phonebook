import { useDispatch, useSelector } from 'react-redux';
import { ImExit } from 'react-icons/im';
import { logoutUserThunk } from 'redux/auth/authOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Button, Exit, Nav, SideBar } from './Navigate.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    isLoggedIn && (
      <SideBar>
        <Nav>
          <Button to="/">Home</Button>
          <Button to="/contacts">Phonebook</Button>

          <Exit type="button" onClick={() => dispatch(logoutUserThunk())}>
            <ImExit />
            Log out
          </Exit>
        </Nav>
      </SideBar>
    )
  );
};
export default Navigation;
