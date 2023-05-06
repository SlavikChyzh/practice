import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../redux/users/operations';
import { selectUsers } from 'redux/users/selectors';
import { Link } from 'react-router-dom';

export const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    console.log('fire')
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <>
      <ul>
        {users.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Link to="add">Add user</Link>
    </>
  );
};
