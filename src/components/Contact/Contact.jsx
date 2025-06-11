import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      {contact.name}: {contact.phone}
      <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
    </li>
  );
}
