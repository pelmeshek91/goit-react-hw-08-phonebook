import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { PhoneBook } from 'components/Phonebook/PhoneBook';

const PhonebookPage = () => {
  return (
    <div>
      <Form />
      <Filter />
      <PhoneBook />
    </div>
  );
};

export default PhonebookPage;
