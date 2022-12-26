import { Component } from 'react';
import users from '../data/users.json';
import { FontStyles } from '../styles/FontStyles';
import { GlobalStyleComponent } from '../styles/GlobalStyles';
import { Container } from './Container/Container.styled';
import { UserList } from './UserList/UserList';

export class App extends Component {
  state = {
    users: users.map(user => {
      return { ...user, isFollowing: false };
    }),
    isFollowing: '',
  };

  componentDidMount() {
    const parsedUsers = JSON.parse(localStorage.getItem('users'));
    if (parsedUsers) {
      this.setState({ users: parsedUsers });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.users !== this.setState.users) {
      localStorage.setItem('users', JSON.stringify(this.state.users));
    }
  }

  onToggle = id => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        if (user.id === id) {
          const following = !user.isFollowing;
          return {
            ...user,
            isFollowing: following,
            followers: following ? user.followers + 1 : user.followers - 1,
          };
        }
        return user;
      }),
    }));
  };

  render() {
    const { users } = this.state;
    return (
      <Container>
        <UserList users={users} onClick={this.onToggle} />
        <FontStyles />
        <GlobalStyleComponent />
      </Container>
    );
  }
}
