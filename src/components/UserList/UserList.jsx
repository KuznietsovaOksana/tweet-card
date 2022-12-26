import { User } from 'components/User/User';
import { List } from './UserList.styled';

export const UserList = ({ users, onClick }) => {
  return (
    <List>
      {users.map(user => {
        return <User key={user.id} user={user} onClick={onClick} />;
      })}
    </List>
  );
};
