import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { PhoneBook } from 'components/Phonebook/PhoneBook';

const PhonebookPage = () => {
  return (
    <div>
      <Form />
      <PhoneBook />
      <Filter />
    </div>
  );
};

export default PhonebookPage;
