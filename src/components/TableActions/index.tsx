import { IconEdit, IconDelete } from '~/assets/Icons';
import { Bt } from './styles';

interface IProps {
  FunctionTrash: any;
  FunctionEdit: any;
}

const TableActions: React.FC<IProps> = ({
  FunctionTrash,
  FunctionEdit,
}: IProps) => {
  return (
    <>
      <Bt onClick={FunctionTrash}>
        <IconDelete />
      </Bt>
      <Bt onClick={FunctionEdit}>
        <IconEdit />
      </Bt>
    </>
  );
};

export default TableActions;
