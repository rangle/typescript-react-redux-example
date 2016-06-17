import * as React from 'react';
import * as classNames from 'classnames';

interface IFormErrorProps extends React.Props<any> {
  isVisible: boolean;
  id?: string;
  testid?: string;
};

export default function FormError({
  children = null,
  isVisible,
  id = '',
  testid = 'form-error'
}: IFormErrorProps) {
  const formErrorClasses = classNames('bold', 'black', { 'hide': !isVisible });

  return (
    <div
      data-testid={ testid }
      className={ formErrorClasses }
      id={ id }>
      { children }
    </div>
  );
}
