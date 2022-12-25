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
import boy from '../../img/boy.png';

export const User = () => {
  return (
    <UserItem>
      <UserHeader>
        <Logo src={logo} alt="GoIT logo" />
        <DecorMain>
          <img src={decorMain} alt="GoIT logo" />
        </DecorMain>
      </UserHeader>
      <UserData>
        <AvatarBox>
          <Avatar src={boy} alt="Avatar" />
        </AvatarBox>
        <UserInfo>
          <UserText>777 tweets</UserText>
          <UserText>100500 followers</UserText>
        </UserInfo>
        <Button>Follow</Button>
      </UserData>
    </UserItem>
  );
};
