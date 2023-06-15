import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    isLoggedIn && (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Phonebook</NavLink>
      </nav>
    )
  );
};
export default Navigation;
