import { UsersItem} from '../UserItem/UserItem';

export const UsersList = ({ users, deleteUser }) => (
  (
    <ul>
      {users.map(({ id, name, email, hasJob, avatar }) => (
        <UsersItem
          key={id}
          id={id}
          name={name}
          email={email}
          hasJob={String(hasJob)}
          avatar={avatar}
          deleteUser={deleteUser}
        />
      ))}
    </ul>
  )
);
