import { Component } from "react";
export class Form extends Component {
  state = {
    name: '',
    email: '',
    avatar: '',
  }
  changeHandler = ({ target: { value,name} }) => {
    this.setState({ [name]: value })
  }
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addUser({ ...this.state });
    this.props.closeForm();
  }
  render() {
    const { name, email, avatar } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <label>Name
          <input onChange={this.changeHandler} name='name' value={name} />
        </label>
        <label>Email
          <input onChange={this.changeHandler} name='email' value={email} />
        </label>
        <label>Avatar
          <input onChange={this.changeHandler} name='avatar' value={avatar} />
        </label>
        <button>Create User</button>
      </form>
    )
  }
}
