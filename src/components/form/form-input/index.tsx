import * as React from 'react';

interface IFieldDefinition {
  value?: string;
  onBlur?: () => void;
  onChange?: () => void;
  onFocus?: () => void;
}

interface IInputProps extends React.Props<any> {
  fieldDefinition?: IFieldDefinition;
  type?: string;
  placeholder?: string;
  id?: string;
};

export default function Input({
  type = 'text',
  placeholder = '',
  fieldDefinition = {} as IFieldDefinition,
  id = ''
}) {
  const {
    value,
    onBlur,
    onChange,
    onFocus
  } = fieldDefinition;

  return (
    <input
      id={ id }
      className="block col-12 mb1 input"
      type={ type }
      placeholder={ placeholder }
      value={ value }
      onBlur={ onBlur }
      onChange={ onChange }
      onFocus={ onFocus } />
  );
}
