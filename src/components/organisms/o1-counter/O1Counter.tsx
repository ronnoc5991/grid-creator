import type { ReactElement } from 'react';
import { StyledO1Counter } from './O1Counter.styles';
import M1Button from "../../molecules/m1-button";

type O1CounterProps = {
  label: string;
  value: number;
  onValueChange: (value: number) => void;
  minimum: number;
  maximum?: number;
};

export default function O1Counter({ label, value, onValueChange, minimum, maximum }: O1CounterProps): ReactElement {
  function increment() {
    if (!maximum || value !== maximum) onValueChange(value + 1);
  }

  function decrement() {
    if (value !== minimum) onValueChange(value - 1);
  }

  return (
    <StyledO1Counter>
      <M1Button label="-" onClick={decrement}/>
      {label}: {value}
      <M1Button label="+" onClick={increment}/>
    </StyledO1Counter>
  );
}
