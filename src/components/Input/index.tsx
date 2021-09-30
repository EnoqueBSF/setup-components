import { FocusEvent } from 'react';
import { Content, Label, InputStyle } from './styles';

interface IProps {
  name?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  value?: string;
  onChange?: ((e: FocusEvent<HTMLInputElement>) => void) | null;
  onBlur?: ((e: FocusEvent<HTMLInputElement>) => void) | null;
}

const defaultProps = {
  name: '',
  id: '',
  label: '',
  disabled: false,
  value: '',
  onChange: null,
  onBlur: null,
};

const Input: React.FC<IProps> = ({
  name,
  id,
  label,
  value,
  disabled,
  onChange,
  onBlur,
}: IProps) => {
  return (
    <Content>
      <Label htmlFor={id}>{label}</Label>
      <InputStyle
        id={id}
        name={name}
        value={value}
        onChange={(e: FocusEvent<HTMLInputElement>) => {
          if (onChange) onChange(e);
        }}
        disabled={disabled}
        onBlur={(e: FocusEvent<HTMLInputElement>) => {
          if (onBlur) onBlur(e);
        }}
      />
    </Content>
  );
};

Input.defaultProps = defaultProps;

export default Input;
