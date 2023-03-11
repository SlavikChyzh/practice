import { data } from '../data/userData'
import { Component } from "react";
import { Button } from './Button/Button'
import { UsersList } from './UsersList/usersList'
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    users: data,
    isListShown: false,
    isFormShown: false
  };
  showList = () => {
    this.setState({ isListShown: true });
  };
  deleteUsers = (id) => { 
    this.setState((prevState) => {return {users: prevState.users.filter(user => user.id !== id)}})
  };

  addUser = (user) => {
    
    const newUser = {
      ...user,
      hasJob: false,
      id: nanoid(),
    }
    this.setState((prevState) => { return { users: [...prevState.users, newUser]}})
  }

  closeForm= () => {
    this.setState({ isFormShown: false })
  }
  openForm = () => {
    this.setState({ isFormShown: true })
  }
    render()
    {
    const { isListShown, users,isFormShown } = this.state;
    return (
      <>
        {isListShown ?
          (<>
            <UsersList users={users} deleteUser={this.deleteUsers} />
            {!isFormShown && <Button text='Add user' clickHandler={this.openForm} />}
          </>) :
          (<Button text="show List Of Users" clickHandler={this.showList} />)}
        {isFormShown && <Form addUser={this.addUser} closeForm={ this.closeForm} />} 
      
      </>
    );
  }
}
