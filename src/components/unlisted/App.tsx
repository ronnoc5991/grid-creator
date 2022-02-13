import type { ReactElement } from 'react';
import {useEffect, useState} from "react";
import O1Counter from "../organisms/o1-counter";
import O2Grid from "../organisms/o2-grid";

export default function App(): ReactElement {
  const [emptyCellValue] = useState('');
  const [numberOfColumns, setNumberOfColumns] = useState(10);
  const [numberOfRows, setNumberOfRows] = useState(10);
  const [activeCellType] = useState('X');
  const [grid, setGrid] = useState(Array.from({ length: numberOfRows }).map(() => Array.from({ length: numberOfColumns }).map(() => emptyCellValue)));

  useEffect(() => {
    const newGrid = Array.from({ length: numberOfRows }).map((row, rowIndex) => Array.from({ length: numberOfColumns }).map((column, columnIndex) => {
      if (grid[rowIndex] && grid[rowIndex][columnIndex]) return grid[rowIndex][columnIndex];
      return emptyCellValue
    }));
    setGrid(newGrid);
  }, [numberOfColumns, numberOfRows]);

  function onCellClick(rowIndex: number, columnIndex: number) {
    const updatedGrid = grid.map((row, rowNumber) => row.map((column, columnNumber) => {
      return rowIndex === rowNumber && columnIndex === columnNumber ? activeCellType : column;
    }))
    setGrid(updatedGrid);
  }

  // create ability to create cell types
  // give it a value that will be used in the array when we 'print it'
  // associate a color with it?  That way it may be easier to visualize what you are building
  // associate an image with it?  Same logic as above
  // Create a print button that either logs the created array to the console or copies it to your clipboard (that might be cooler)
  // can also open it in a modal?
  // Create a reset button that clears the grid
  // memoize or useCallback in the functions that we create in the
  // create an is dragging state?  that allows us to click and drag over multiple cells to bulk update them
  // should be able to update the empty cell value, it may not always be useful to have an empty string

  return <>
    <O1Counter label="Number Of Rows" value={numberOfRows} onValueChange={setNumberOfRows} minimum={1}/>
    <O1Counter  label="Number Of Columns" value={numberOfColumns} onValueChange={setNumberOfColumns} minimum={1}/>
    <O2Grid grid={grid} onCellClick={onCellClick}/>
  </>;
}
