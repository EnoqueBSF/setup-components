import { FocusEvent } from 'react';
import { Container, Icone, InputContainer } from './styles';

interface IProps {
  placeholder?: string;
  icon?: any | undefined;
  name?: string;
  onChange?: ((e: FocusEvent<HTMLInputElement>) => void) | null;
}
const defaultProps = {
  name: '',
  placeholder: '',
  icon: null,
  onChange: null,
};

const InputSearch: React.FC<IProps> = ({
  placeholder,
  icon,
  name,
  onChange,
}: IProps) => {
  function AddIcon() {
    if (icon) {
      return <Icone>{icon}</Icone>;
    }
    return null;
  }
  return (
    <>
      <InputContainer
        onChange={(e: FocusEvent<HTMLInputElement>) => {
          if (onChange) onChange(e);
        }}
      >
        <Container state={icon} placeholder={placeholder} name={name} />
        {AddIcon()}
      </InputContainer>
    </>
  );
};

InputSearch.defaultProps = defaultProps;

export default InputSearch;
