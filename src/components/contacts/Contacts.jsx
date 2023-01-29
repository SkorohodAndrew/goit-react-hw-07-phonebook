import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations';
import { getFilter, getItems } from '../../redux/selectors';
import { Info, Span, Button } from './ContactsStyled';

const Contacts = () => {
  const filter = useSelector(getFilter);
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactFiltering = () => {
    const normalizeFilter = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredContacts = contactFiltering();

  return (
    <Info>
      {filteredContacts.map(({ id, name, phone }) => (
        <Span key={id}>
          {name}: {phone}
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </Span>
      ))}
    </Info>
  );
};

export default Contacts;
