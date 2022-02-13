import type { ReactElement } from 'react';
import { StyledO2Grid } from './O2Grid.styles';
import O3Row from "../o3-row";

type O2GridProps = {
  grid: Array<Array<string>>;
  onCellClick: (rowIndex: number, columnIndex: number) => void;
};

export default function O2Grid({ grid, onCellClick }: O2GridProps): ReactElement {
  return (
    <StyledO2Grid>
      {grid.map((row, rowIndex) => <O3Row key={`row-${rowIndex}`} index={rowIndex} cells={row} onCellClick={onCellClick}/>)}
    </StyledO2Grid>
  );
}
