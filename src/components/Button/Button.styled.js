import styled from 'styled-components';

const setBgColor = props => {
  if (props.children === 'Follow') {
    return '#EBD8FF';
  }
  return '#5CD3A8';
};

export const ButtonFollow = styled.button`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  min-width: 226px;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  background-color: ${setBgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: transparent;
  transition: background-color 250ms ease 0s;
  transition: transform 250ms ease 0s;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;
