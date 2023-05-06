import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser, fetchUser } from 'redux/users/operations';
import { selectUserInfo } from 'redux/users/selectors';

export const EditUserPage = () => {
  const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

  const editUserbyID = useSelector(selectUserInfo);
  const [userData, setData] = useState(editUserbyID);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  const inputHandler = ({ target: { name, value } }) => {
    setData({ ...userData, [name]: value });
  };
    const handelSubmit = async e => {
        e.preventDefault();
        await dispatch(editUser(userData))
        navigate(`/users/${id}`)

  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <label>
          name
          <input
            required
            type="text"
            name="name"
            value={userData.name}
            onChange={inputHandler}
          />
        </label>{' '}
        <label>
          phone
          <input
            required
            type="text"
            name="phone"
            value={userData.phone}
            onChange={inputHandler}
          />
        </label>
        <label>
          avatar
          <input
            required
            type="url"
            name="avatar"
            value={userData.avatar}
            onChange={inputHandler}
          />
        </label>{' '}
        <label>
          address
          <input
            required
            type="text"
            name="address"
            value={userData.address}
            onChange={inputHandler}
          />
        </label>{' '}
        <label>
          email
          <input
            required
            type="email"
            name="email"
            value={userData.email}
            onChange={inputHandler}
          />
        </label>
        <button>Save</button>
      </form>
    </>
  );
};
