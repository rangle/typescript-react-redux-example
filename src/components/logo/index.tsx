declare var require: any;

import * as React from 'react';
const LogoImage = require('../../assets/rangleio-logo.svg');

const styles = { width: 128 };

export default function Logo() {
  return (
    <div className="flex items-center">
      <img style={ styles }
        src={ LogoImage }
        alt="Rangle.io" />
    </div>
  );
}
