import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logoutUserThunk())}>
        Logout
      </button>
    </div>
  );
};
