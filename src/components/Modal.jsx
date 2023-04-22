import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from 'redux/users/operations';

export const Modal = ({ closeModal, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteCurrentUser = id => {
    dispatch(deleteUser(id));
    navigate('/users');
  };

  return (
    <div>
      <p>Are you sure?</p>
      <button type="button" onClick={() => deleteCurrentUser(id)}>
        yes!
      </button>
      <button type="button" onClick={closeModal}>
        NO
      </button>
    </div>
  );
};
