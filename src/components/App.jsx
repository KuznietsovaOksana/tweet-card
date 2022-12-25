import { FontStyles } from '../styles/FontStyles';
import { GlobalStyleComponent } from '../styles/GlobalStyles';
import { Button } from './Button/Button.styled';
import { Container } from './Container/Container.styled';

export const App = () => {
  return (
    <Container>
      <Button>Follow</Button>
      <FontStyles />
      <GlobalStyleComponent />
    </Container>
  );
};
