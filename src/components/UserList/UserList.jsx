import PropTypes from 'prop-types';
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

User.UserList = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
