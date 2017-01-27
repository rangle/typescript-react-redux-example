declare var require: any;

import * as React from 'react';
const objectAssign = require('object-assign');
import * as classNames from 'classnames';
const Styles =  require('../modal.css');

interface IModalContentProps extends React.Props<any> {};

export default function ModalContent({
  children = null
}: IModalContentProps) {
  const classDef = classNames('p2', 'z2', 'bg-white', 'relative',
    Styles.modal);

  return (
    <div className={ classDef }>
      { children }
    </div>
  );
}
