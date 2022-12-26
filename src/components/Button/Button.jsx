import PropTypes from 'prop-types';
import { ButtonFollow } from './Button.styled';

export const Button = ({ user, onClick }) => {
  return (
    <ButtonFollow type="button" onClick={() => onClick(user.id)}>
      {user.isFollowing ? 'Following' : 'Follow'}
    </ButtonFollow>
  );
};

Button.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
