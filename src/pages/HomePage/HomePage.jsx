import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { Title } from './HomePage.styled';

const HomePage = () => {
  const user = useSelector(selectUser);
  return (
    <Title>
      <h1> Welcome to Phonebook, {user.name}!</h1>
    </Title>
  );
};

export default HomePage;
