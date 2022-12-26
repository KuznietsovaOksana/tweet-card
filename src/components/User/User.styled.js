import styled from 'styled-components';

export const UserItem = styled.li`
  flex: 1 0 50%;
  max-width: 454px;
  height: 547px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -3px 8px 24px rgba(0, 0, 0, 0.23);
  border-radius: 24px;
  transition: box-shadow 2500ms ease 0s;
  &:hover,
  &:focus {
    box-shadow: -3px 8px 24px rgba(0, 0, 0, 0.6);
    img {
      transform: scale(1.03);
    }
  }
`;

export const UserHeader = styled.div`
  position: relative;
  padding-top: 34px;
  padding-left: 10px;
  padding-right: 10px;
  min-height: 251px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 88px;
  transform: scale(1);
  transition: transform 250ms ease 0s;
`;

export const DecorMain = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 357px;
  height: 194px;
  fit-contain: cover;
  & img {
    transform: scale(1);
    transition: transform 250ms ease 0s;
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
  transform: scale(1);
  transition: transform 250ms ease 0s;
`;

export const UserInfo = styled.ul`
  margin-bottom: 32px;
`;

export const UserText = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
