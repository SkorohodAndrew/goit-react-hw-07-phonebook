import Form from '../form/Form';
import Contacts from '../contacts/Contacts';
import Filter from '../filter/Filter';
import { Container } from './AppStyled';

export function App() {
  return (
    <Container>
      <h1>Phonebook</h1>

      <Form />
      <h1>Contacts</h1>
      <Filter />
      <Contacts />
    </Container>
  );
}
