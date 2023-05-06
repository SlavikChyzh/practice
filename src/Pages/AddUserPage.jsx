import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUsers } from 'redux/users/operations';

export const AddUserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = async e => {
    e.preventDefault();

    const user = {
      name: e.target.elements.name.value,
      phone: e.target.elements.phone.value,
      avatar: e.target.elements.avatar.value,
      address: e.target.elements.address.value,
      email: e.target.elements.email.value,
    };

    const newUser = await dispatch(addUsers(user)).unwrap();
    navigate(`/users/${newUser.id}`);
  };

  return (
    <form onSubmit={handelSubmit}>
      <label>
        name
        <input required type="text" name="name" />
      </label>{' '}
      <label>
        phone
        <input required type="text" name="phone" />
      </label>
      <label>
        avatar
        <input required type="url" name="avatar" />
      </label>{' '}
      <label>
        address
        <input required type="text" name="address" />
      </label>{' '}
      <label>
        email
        <input required type="email" name="email" />
      </label>
      <button>Add</button>
    </form>
  );
};
