import { FontStyles } from '../styles/FontStyles';
import { GlobalStyleComponent } from '../styles/GlobalStyles';
import { Container } from './Container/Container.styled';
// import { Button } from './Button/Button';
import { User } from './User/User';

export const App = () => {
  return (
    <Container>
      <User />
      <FontStyles />
      <GlobalStyleComponent />
    </Container>
  );
};
