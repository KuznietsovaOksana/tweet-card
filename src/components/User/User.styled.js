import styled from 'styled-components';
import decorHeart from '../../img/decor-heart.png';
import decorDots from '../../img/decor-dots.png';
import decorBubbleHeart from '../../img/decor-bubble_heart.png';

export const UserItem = styled.li`
  width: 454px;
  height: 547px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -3px 8px 24px rgba(0, 0, 0, 0.23);
  border-radius: 24px;
`;

export const UserHeader = styled.div`
  position: relative;
  padding-top: 38px;
  min-height: 251px;
  &: after {
    content: '';
    position: absolute;
    background: url(${decorHeart});
    top: 182px;
    right: 68px;
    width: 44px;
    height: 46px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 88px;
`;

export const DecorMain = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 226px;
  height: 152px;
  fit-contain: cover;
  &: before {
    content: '';
    position: absolute;
    top: 146px;
    left: -62px;
    background: url(${decorDots});
    width: 56px;
    height: 48px;
  }
  &: after {
    content: '';
    position: absolute;
    background: url(${decorBubbleHeart});
    top: -4px;
    left: 256px;
    width: 39px;
    height: 47px;
  }
`;

export const UserData = styled.div`
  position: relative;
  padding: 74px 24px 48px;
  min-height: 296px;
  text-align: center;
  font-size: 24px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
      inset 0px 4px 3px #fbf8ff;
  }
`;

export const AvatarBox = styled.div`
  position: absolute;
  top: -46px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 92px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebd8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
    inset 0px 4px 3px #fbf8ff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #5736a3;
  object-fit: cover;
`;

export const UserInfo = styled.ul`
  margin-bottom: 32px;
`;

export const UserText = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
