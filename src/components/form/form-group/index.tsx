import * as React from 'react';

interface IFormGroupProps extends React.Props<any> {
  testid?: string;
};

export default function FormGroup({
  children = null,
  testid = ''
}: IFormGroupProps) {
  return (
    <div
      data-testid={ testid }
      className="py2">
      { children }
    </div>
  );
}
