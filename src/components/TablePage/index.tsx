import { Table } from 'antd';
import { Container } from './styles';

interface IProps {
  Columns: any[];
  Json: any;
}

const TablePage: React.FC<IProps> = ({ Columns, Json }: IProps) => {
  return (
    <Container>
      <Table columns={Columns} dataSource={Json} />
    </Container>
  );
};

export default TablePage;
