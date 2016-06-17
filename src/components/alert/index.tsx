import * as React from 'react';
import * as classNames from 'classnames';

interface IAlertProps extends React.Props<any> {
  isVisible?: boolean;
  status?: string;
  id?: string;
  testid?: string;
};

const statusClasses = {
  info: 'bg-blue white',
  warning: 'bg-yellow black',
  success: 'bg-green black',
  error: 'bg-red white',
};

export default function Alert({
  children = null,
  isVisible,
  status = 'info',
  id = '',
  testid = ''
}: IAlertProps) {
  const alertClasses = classNames(['p2', 'bold'], {
    block: isVisible,
    hide: !isVisible,
    [statusClasses[status]]: true,
  });

  return (
    <div
      id={ id }
      data-testid={ testid }
      className={ alertClasses }>
      { children }
    </div>
  );
};
