import type { ReactElement } from 'react';
import { StyledM1Button } from './M1Button.styles';

type M1ButtonProps = {
  label?: string;
  onClick?: () => void;
};

export default function M1Button({ label, onClick }: M1ButtonProps): ReactElement {
  return (
    <StyledM1Button onClick={onClick}>
      {label}
    </StyledM1Button>
  );
}
