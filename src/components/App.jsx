import { FontStyles } from '../styles/FontStyles';
import { GlobalStyleComponent } from '../styles/GlobalStyles';
import { Button } from './Button/Button.styled';

export const App = () => {
  return (
    <>
      <Button>Follow</Button>
      <FontStyles />
      <GlobalStyleComponent />
    </>
  );
};
