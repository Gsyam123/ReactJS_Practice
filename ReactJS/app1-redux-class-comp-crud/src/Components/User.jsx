import { Component } from "react";
import { connect } from "react-redux";
import {
  createUserAction,
  deleteUserAction,
  updateUserAction,
} from "../ReduxStore/action";

class User extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      user: {
        userId: "",
        userName: "",
        userMobile: "",
      },
      isEdit: false,
    };
  }

  handleChange = (e) => {
    let newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };

  handleClear = () => {
    this.setState({
      user: {
        userId: "",
        userName: "",
        userMobile: "",
      },
    });
  };

  handleDelete = (usr) => {
    this.props.dispatch(deleteUserAction(usr));
  };

  handleCreateUser = () => {
    this.props.dispatch(createUserAction(this.state.user));
    this.handleClear();
  };
  handleEditUser = (u) => {
    this.setState({ user: u, isEdit: true });
  };
  handleUpdateUser = () => {
    this.props.dispatch(updateUserAction(this.state.user));
    this.handleClear();
    this.setState({ isEdit: false });
  };
  render() {
    let { myUsers } = this.props;
    return (
      <>
        <form>
          <label htmlFor="userId">userId : </label>
          <input
            type="tel"
            name="userId"
            value={this.state.user.userId}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label htmlFor="userName">userName : </label>
          <input
            type="tel"
            name="userName"
            value={this.state.user.userName}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label htmlFor="userMobile">userMobile : </label>
          <input
            type="tel"
            name="userMobile"
            value={this.state.user.userMobile}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          {this.state.isEdit ? (
            <button onClick={this.handleUpdateUser} type="button">
              Update-User
            </button>
          ) : (
            <button onClick={this.handleCreateUser} type="button">
              Create-User
            </button>
          )}
        </form>
        <table border={2}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>User Mobile</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myUsers.map((usr) => {
              return (
                <tr key={usr.userId}>
                  <td>{usr.userId}</td>
                  <td>{usr.userName}</td>
                  <td>{usr.userMobile}</td>
                  <td>
                    <button onClick={() => this.handleEditUser(usr)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(usr);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

function mapStateToProps(state) {
  //   console.log(state.users);
  return {
    myUsers: state.users,
  };
}

export default connect(mapStateToProps)(User);
