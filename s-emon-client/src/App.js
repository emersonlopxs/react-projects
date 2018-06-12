import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        email: '',
        password: '',
        full_name: '',
        username: '',
        img: ''
      }
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  fetchData() {
    fetch('http://127.0.0.1:3000/')
      .then((res) => {
        return res.json();
      })

      .then(users =>
        this.setState({
          users: users
        }))
      // handle the error
      .catch(err => console.log(err));
  }

  // rendering the data fetched
  componentDidMount() {
    this.fetchData();
  }

  // this changes all the inputs
  handleInput(e) {
    const { value } = e.target;
    const { name } = e.target;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  async function () {
    // do something here
    this.state;
    return 1 + 3;
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const userData = this.state.newUser;
    // this.setState({
    //   users: [...this.state.users, userData]
    // });

    fetch('http://127.0.0.1:3000/register', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      response.json().then((data) => {
        this.setState({
          users: [...this.state.users, data]
        });
      });
    });
  }

  render() {
    const { users } = this.state;
    const style = {
      display: 'flex',
      flexWrap: 'wrap'
    };

    const styleForm = {
      width: '100%',
      height: '150px'
    };

    const input = {
      width: '300px',
      display: 'flex',
      flexDirection: 'row',
      height: '20px'
    };
    // const users = 0;
    return (
      <div style={style}>
        {/* <SingUp /> */}

        <div style={styleForm}>
          <h1>Sign Up!</h1>

          {/* Controlled froms */}
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="text" placeholder="name" name="full_name"
              required value={this.state.newUser.full_name} onChange={this.handleInput}
            />

            <input
              type="text" placeholder="password" name="password"
              required value={this.state.newUser.passoword} onChange={this.handleInput}
            />

            <input
              type="email" placeholder="email" name="email"
              required value={this.state.newUser.email} onChange={this.handleInput}
            />

            <input
              type="text" placeholder="username" name="username"
              required value={this.state.newUser.username} onChange={this.handleInput}
            />

            <input
              type="url" placeholder="img url" name="img"
              required value={this.state.newUser.img} onChange={this.handleInput}
            />

            <button type="submit" onSubmit={this.handleFormSubmit}>
              OK
            </button>
          </form>
        </div>

        <div style={style} />
        {users.length > 0 ? (
          users.map((user) => {
            // mapping over the users
            return (
              <div key={user.email}>
                <User
                  email={user.email}
                  password={user.password}
                  fullName={user.full_name}
                  username={user.username}
                  img={user.img}
                  created={user.created_at || 'Created today'}
                />
              </div>
            );
          })
        ) : (
          <p> no users found</p>
        )}
      </div>
    );
  }
}

const User = (props) => {
  const style = {
    border: '1px solid black',
    width: '200px',
    // height: '220px',
    backgroundColor: '#bbd',
    textAlign: 'Center'
  };

  return (
    <div style={style}>
      <h4>{props.fullName}</h4>
      <p>{props.email}</p>
      <p>{props.password}</p>
      <p>{props.username}</p>
      <p>{props.created}</p>
      <img src={props.img} alt="" />
    </div>
  );
};

export default App;
