import * as React from 'react';

export interface BoardProps {
  compiler: string;
  framework: string;
}

export const Board = (props: BoardProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);
