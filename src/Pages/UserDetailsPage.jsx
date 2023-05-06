import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchUser } from 'redux/users/operations';
import { selectUserInfo } from 'redux/users/selectors';
import { Modal } from '../components/Modal';

export const UserDetailsPage = () => {
  const [idUser, setIdUser] = useState(null);

  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  const closeModal = () => {
    setIdUser(null);
  };

  if (!userInfo) {
    return;
  }

  const { name, avatar, phone, email, address } = userInfo;

  return (
    <>
      <div>
        <p>{name}</p>
        <img src={avatar} alt="" />
        <p>{phone}</p>
        <p>{address}</p>
        <p>{email}</p>
        <button type="button" onClick={() => setIdUser(id)}>
          delete
        </button>
        <Link to='edit'>Edit user info</Link>
      </div>
      {idUser && <Modal id={idUser} closeModal={closeModal} />}
    </>
  );
};
