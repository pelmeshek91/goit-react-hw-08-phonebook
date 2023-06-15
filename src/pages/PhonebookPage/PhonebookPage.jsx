import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { PhoneBook } from 'components/Phonebook/PhoneBook';
import { Wrapper } from './Phonebook.styled';

const PhonebookPage = () => {
  return (
    <Wrapper>
      <Form />
      <Filter />
      <PhoneBook />
    </Wrapper>
  );
};

export default PhonebookPage;
