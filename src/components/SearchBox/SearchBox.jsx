import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filters/filtersSlice';
import { selectNameFilter } from '../../redux/filters/selectors';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={(e) => dispatch(setNameFilter(e.target.value))}
    />
  );
}
