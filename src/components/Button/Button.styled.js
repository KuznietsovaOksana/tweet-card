import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  display: block;
  min-width: 226px;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  background-color: #ebd8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: transparent;
  transition: background-color 250ms ease 0s, box-shadow 250ms ease 0s;

  &:hover,
  &:focus {
    background-color: #d4a4ed;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  }
`;
