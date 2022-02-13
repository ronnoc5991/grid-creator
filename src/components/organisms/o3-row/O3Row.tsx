import type { ReactElement } from 'react';
import { StyledO3Row } from './O3Row.styles';
import M1Button from "../../molecules/m1-button";

type O3RowProps = {
  index: number;
  cells: Array<string>;
  onCellClick: (rowIndex: number, columnIndex: number) => void;
};

export default function O3Row({ index, cells, onCellClick }: O3RowProps): ReactElement {
  return (
    <StyledO3Row>
      {cells.map((cell, columnIndex) => <M1Button key={`row-${index}-column-${columnIndex}`} label={cell} onClick={() => onCellClick(index, columnIndex)}/>)}
    </StyledO3Row>
  );
}
