export const UsersItem = ({ id, name, email, hasJob, avatar, deleteUser}) => (
  <li>
    <p>name: {name}</p>
    <p>email: {email}</p>
    <p>has job: {hasJob}</p>
    <button onClick={()=>deleteUser(id)}>delete</button>
  </li>
);