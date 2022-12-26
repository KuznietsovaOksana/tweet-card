import { ButtonFollow } from './Button.styled';

export const Button = ({ user, onClick }) => {
  return (
    <ButtonFollow
      type="button"
      onClick={() => onClick(user.id)}
      style={{ backgroundColor: user.isFollowing ? '#5CD3A8' : '#ebd8ff' }}
    >
      {user.isFollowing ? 'Following' : 'Follow'}
    </ButtonFollow>
  );
};
