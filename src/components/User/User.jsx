import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import {
  UserItem,
  UserHeader,
  Logo,
  DecorMain,
  UserData,
  AvatarBox,
  Avatar,
  UserInfo,
  UserText,
} from './User.styled';
import logo from '../../img/logo.svg';
import decorMain from '../../img/decor-main.png';

export const User = ({ user, onClick }) => {
  return (
    <UserItem>
      <UserHeader>
        <Logo src={logo} alt="GoIT logo" />
        <DecorMain>
          <img src={decorMain} alt="Decor" />
        </DecorMain>
      </UserHeader>
      <UserData>
        <AvatarBox>
          <Avatar src={user.avatar} alt="Avatar" />
        </AvatarBox>
        <UserInfo>
          <UserText>{user.tweets} tweets</UserText>
          <UserText>
            {user.followers.toLocaleString('en-US')} followers
          </UserText>
        </UserInfo>
        <Button user={user} onClick={onClick} />
      </UserData>
    </UserItem>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
